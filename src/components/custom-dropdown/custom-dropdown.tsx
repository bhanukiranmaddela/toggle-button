import { Component, Host, h,Prop, State,Event,EventEmitter } from '@stencil/core';


@Component({
  tag: 'custom-dropdown',
  styleUrl: 'custom-dropdown.css',
  shadow: true,
})
export class CustomDropdown {

  /**
   * it gets data from the tag
   */
  @Prop() readonly countryName:string;

  /** 
  * internalmodification of countryName
  */
  @Prop()  countryInp:string;

  /**
   * array for country list
   */
  @Prop() countries:string[]= ["India","America","Britan","Arab","Pakisthan","London"];

  /**
  * @param for internal modifications
  */
  @State() internalGender:string;

  /**
   * to toggle list 
   */
  @State() toggleList:boolean=false;

  /**
   * Emits country value
   */
  @Event() emitCountryValue:EventEmitter<string>;

  private loadDataonEmptyInput():string []{
      return ["India","America","Britan","Arab","Pakisthan","London"]
  }

  componentWillLoad(){
      this.countryInp=this.countryName;
      this.countries.push("SriLanka");
    console.log(this.countries);
  }

  private setInput(event):void{
    this.countryInp=event.target.id;
    //console.log(this.countryInp);
  }
  private onchangeInput(event):void{
    let inpVal = event.target.value;
    this.countryInp = inpVal;
    console.log("inp",this.countryInp,"keyCode",event.key);
    if (inpVal!==""){
      this.toggleList=true;
      this.countries = this.countries.filter((e)=>e.toLowerCase().includes(inpVal.toLowerCase()));
    }else{
      this.countries = this.loadDataonEmptyInput();
      this.toggleList=false;
    }
  }

  private unhideList():void{
      this.toggleList=true;
      console.log(this.toggleList);
  }
  render() {
    return (
      <Host>
        <div>
          <div>
            <input type="text" id='userInp' class="auto-inp" placeholder='Search Country' onClick={this.unhideList.bind(this)}  onInput={this.onchangeInput.bind(this)} value={this.countryInp} />
            <ul class={this.toggleList===true?`unhide`:`hide-ul`}>
                {this.countries.map((e) =>
                    <li id={e} onClick={this.setInput.bind(this)}>{e}</li>
                )}
            </ul>
          </div>
        </div>
      </Host>
    );
  }
}