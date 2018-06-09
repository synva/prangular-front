import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageContainer() {
    return element(by.css('page-container'));
  }
}
