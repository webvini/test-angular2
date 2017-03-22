import { MyAccountPage } from './app.po';

describe('my-account App', () => {
  let page: MyAccountPage;

  beforeEach(() => {
    page = new MyAccountPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
