import { Component, Host, h } from '@stencil/core';
import {Tabulator} from 'tabulator-tables'

@Component({
  tag: 'tabulator-demo',
  styleUrl: 'tabulator-demo.css',
  shadow: true,
})
export class TabulatorDemo {



  tabDemo(){
    
    let tableData = [
      {id:1, name:"Billy Bob", age:"12", gender:"male", height:1, col:"red", dob:"8/05/1982"},
      {id:2, name:"Mary May", age:"1", gender:"female", height:2, col:"blue", dob:"14/05/1982"},
      {id:3, name:"Christine Lobowski", age:"42",gender:"male", height:0, col:"green", dob:"22/05/1982"},
      {id:4, name:"Brendon Philips", age:"12", gender:"male", height:1, col:"orange", dob:"01/08/1980"},
      {id:5, name:"Margret Marmajuke", age:"16", gender:"female", height:5, col:"yellow", dob:"31/01/1999"},
  ]


  var table = new Tabulator("#example",{
    //resizableRows:true,
    layout:"fitData",
    data:tableData,
    height:"100%",
    columns:[
      {title:"Name",field:"name"},
      {title:"Age",field:"age"},
      {title:"Gender",field:"gender"},
      {title:"Fav Color",field:"col"},
      {title:"Date of Birth",field:"dob"},
    ]
  })

  table.deleteRow(0).then(()=>{
    console.log("deleted");
  })
  }

  render() {
    return (
      <Host>
        <div id='#example-table'>{this.tabDemo()}</div>
      </Host>
    );
  }

}
