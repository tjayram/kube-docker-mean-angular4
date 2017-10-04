import { MeankubePage } from './app.po';

describe('meankube App', () => {
  let page: MeankubePage;

  beforeEach(() => {
    page = new MeankubePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
