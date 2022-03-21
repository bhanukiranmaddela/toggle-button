import { newSpecPage } from '@stencil/core/testing';
import { CustomToggleButton } from '../custom-toggle-button';

describe('custom-toggle-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomToggleButton],
      html: `<custom-toggle-button></custom-toggle-button>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-toggle-button>
        <mock:shadow-root>
        <div class="container">
          <div class="toggle-btn">
            <div class="inner-circle">
            </div>
          </div>
        </div>
        </mock:shadow-root>
      </custom-toggle-button>
    `);
  });

  it("checking HTML if button is turning on",async()=>{
    let instance = new CustomToggleButton();
    expect(instance.isOn).toBeFalsy();
    instance.internalIsOn=true;
    expect(instance.isOn).toBeTruthy();
  })

  it("checking HTML if button is turning Off",async()=>{
    let instance = new CustomToggleButton();
    expect(instance.internalIsOn=true).toBeTruthy()
    instance.internalIsOn=false;
    expect(instance.isOn).toBeFalsy();
  })
});

