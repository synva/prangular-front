import { AppPage } from './app.po';

describe('prangular-front App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getPageContainer()).toBeTruthy();
  });
});
