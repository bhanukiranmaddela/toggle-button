import { newE2EPage } from '@stencil/core/testing';

describe('warning-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<warning-icon></warning-icon>');

    const element = await page.find('warning-icon');
    expect(element).toHaveClass('hydrated');
  });
});
