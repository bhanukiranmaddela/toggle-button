import { newE2EPage } from '@stencil/core/testing';

describe('tabulator-demo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tabulator-demo></tabulator-demo>');

    const element = await page.find('tabulator-demo');
    expect(element).toHaveClass('hydrated');
  });
});
