import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  public courses : any = ['MBA','MTECH','BTECH','Agri'];
  public showFlag : boolean= false;
  public newData :any = [];


  onsubmitData(dt:any){
    console.log("this is data from  template driven form")
    console.log(dt.value)
    this.newData.push(dt.value);
    if(this.newData.length > 0){
      this.showFlag=true;
    }
   console.log(this.newData)
  }
}
