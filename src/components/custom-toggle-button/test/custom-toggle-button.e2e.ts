import { newE2EPage } from '@stencil/core/testing';
//import { CustomToggleButton } from '../custom-toggle-button';

describe('custom-toggle-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-toggle-button></custom-toggle-button>');

    const element = await page.find('custom-toggle-button');
    expect(element).toHaveClass('hydrated');
  });

  it('have active class ', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-toggle-button></custom-toggle-button>');
    const element = await page.find('custom-toggle-button');
    expect(element).not.toHaveClass('active');
  });
});
