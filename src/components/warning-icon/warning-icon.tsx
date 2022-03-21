import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'warning-icon',
  styleUrls: ['warning-icon.css',
  '../../assets/fontawesome/css/all.css'
],
  shadow: true,
})
export class WarningIcon {
  render() {
    return (
      <Host>
          <div class="tooltip"><span class="exclamation">!</span>
            <div class="tooltiptext" title='Error'></div>
          </div>
      </Host>
    );
  }

}
