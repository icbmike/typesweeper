import { TypeSweeperPage } from './app.po';

describe('type-sweeper App', function() {
  let page: TypeSweeperPage;

  beforeEach(() => {
    page = new TypeSweeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
