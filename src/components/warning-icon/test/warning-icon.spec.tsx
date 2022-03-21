import { newSpecPage } from '@stencil/core/testing';
import { WarningIcon } from '../warning-icon';

describe('warning-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WarningIcon],
      html: `<warning-icon></warning-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <warning-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </warning-icon>
    `);
  });
});
