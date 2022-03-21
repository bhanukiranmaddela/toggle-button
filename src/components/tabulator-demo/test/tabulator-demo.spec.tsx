import { newSpecPage } from '@stencil/core/testing';
import { TabulatorDemo } from '../tabulator-demo';

describe('tabulator-demo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabulatorDemo],
      html: `<tabulator-demo></tabulator-demo>`,
    });
    expect(page.root).toEqualHtml(`
      <tabulator-demo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tabulator-demo>
    `);
  });
});
