
import { Component, Host, h, Prop, Event,EventEmitter, State } from '@stencil/core';
@Component({
  tag: 'custom-toggle-button',
  styleUrl: 'custom-toggle-button.css',
  shadow: true,
})
export class CustomToggleButton {

/**
* isOn is is-on in custom-toggle-button
*/
  @Prop() readonly isOn:boolean;

/**
* This event will emit a isOn value
*/
  @Event() toggleEvent :EventEmitter<boolean>;
/**
* This event will emit a isOn value
*/
  @State() internalIsOn:boolean=false;

  componentWillLoad(){
    this.internalIsOn=this.isOn;
  }

  private toggle(){
    //this.internalIsOn=this.isOn;
    this.internalIsOn=!this.internalIsOn;
   console.log(this.internalIsOn);
    this.toggleEvent.emit(this.internalIsOn);
  }

  render() {
    return (
      <Host>
        <div class="container">
            <div class={this.internalIsOn===false?`toggle-btn active`:`toggle-btn `} onClick={this.toggle.bind(this)}>
                <div class="inner-circle">
                </div>
            </div>
        </div>
      </Host>
    );
  }
}