import { MaterialPage } from './app.po';

describe('material App', () => {
  let page: MaterialPage;

  beforeEach(() => {
    page = new MaterialPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
