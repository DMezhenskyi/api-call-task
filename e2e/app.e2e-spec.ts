import { TabletSolutionsPage } from './app.po';

describe('tablet-solutions App', () => {
  let page: TabletSolutionsPage;

  beforeEach(() => {
    page = new TabletSolutionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
