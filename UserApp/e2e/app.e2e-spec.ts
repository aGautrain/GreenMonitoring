import { GreenMonitorPage } from './app.po';

describe('green-monitor App', function() {
  let page: GreenMonitorPage;

  beforeEach(() => {
    page = new GreenMonitorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
