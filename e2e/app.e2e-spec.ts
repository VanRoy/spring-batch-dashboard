import { SpringBatchDashboardPage } from './app.po';

describe('spring-batch-dashboard App', () => {
  let page: SpringBatchDashboardPage;

  beforeEach(() => {
    page = new SpringBatchDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
