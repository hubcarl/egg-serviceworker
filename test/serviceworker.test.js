'use strict';

const mock = require('egg-mock');

describe('test/serviceworker.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/serviceworker-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, serviceworker')
      .expect(200);
  });
});
