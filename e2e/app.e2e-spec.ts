import { Angular4CarouselPage } from './app.po';

describe('angular4-carousel App', () => {
  let page: Angular4CarouselPage;

  beforeEach(() => {
    page = new Angular4CarouselPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
