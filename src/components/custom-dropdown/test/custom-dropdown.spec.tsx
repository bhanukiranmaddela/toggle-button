import { newSpecPage } from '@stencil/core/testing';
import { CustomDropdown } from '../custom-dropdown';

describe('custom-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomDropdown],
      html: `<custom-dropdown></custom-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </custom-dropdown>
    `);
  });
});
