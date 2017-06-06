import { AngularPrototypePage } from './app.po';

describe('angular-prototype App', () => {
  let page: AngularPrototypePage;

  beforeEach(() => {
    page = new AngularPrototypePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
