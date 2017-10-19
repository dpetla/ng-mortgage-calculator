import { MortgageCalcPage } from './app.po';

describe('mortgage-calc App', () => {
  let page: MortgageCalcPage;

  beforeEach(() => {
    page = new MortgageCalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
