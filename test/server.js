const qs = require('querystring');
const fs = require('smart-fs');
const path = require('path');
const http = require('http');
const https = require('https');
const RequestRecorder = require('../src/modules/request-recorder');

module.exports.spawnServer = async (proto = 'http') => {
  const listener = (req, resp) => {
    const params = qs.parse(req.url.split('?').pop());
    resp.writeHead(200);
    resp.write(JSON.stringify({ data: params.q }));
    resp.end();
  };
  const server = { http, https }[proto].createServer(proto === 'https' ? {
    key: fs.readFileSync(path.join(__dirname, 'certs', 'my-server.key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'certs', 'my-server.crt.pem'))
  } : {}, listener);
  await new Promise((resolve) => server.listen(resolve));
  const address = server.address();
  return {
    address,
    uri: `${proto}://localhost:${address.port}`,
    close: () => new Promise((resolve) => server.close(resolve))
  };
};

module.exports.NockRecord = (tmpDir, cassetteFile) => async (fn, {
  stripHeaders = false,
  strict = false,
  heal = false,
  modifiers = {}
}) => {
  const filePath = path.join(tmpDir, cassetteFile);

  const requestRecorder = RequestRecorder({
    cassetteFolder: tmpDir,
    stripHeaders,
    strict,
    heal,
    modifiers
  });
  await requestRecorder.inject(path.basename(filePath));

  try {
    await fn();
  } finally {
    await requestRecorder.release();
    requestRecorder.shutdown();
  }

  return { cassette: fs.smartRead(filePath), ...requestRecorder.get() };
};
