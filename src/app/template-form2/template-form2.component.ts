import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form2',
  templateUrl: './template-form2.component.html',
  styleUrls: ['./template-form2.component.css']
})
export class TemplateForm2Component {
    public Course: any= ['mech','engg','bca','bcs']
    public showFlag:boolean = false;
    public formData: any = [];
    public fn: any;
    public ln: any;
    public em:any;
    public cor:any;
    public ps:any;
    public cps:any;
    public dt:any; 
    public count: number = 1;
    public idd:any;

  OnSubmit(at:any){
   console.log("this is a template form data")
   console.log(at);

   at.value.id = this.count;
   this.formData.push(at.value)
   if(this.formData.length > 0){
    this.showFlag = true;
   }
   this.count++;
   console.log(this.formData);
    }

    updateData(dt1:any){
     console.log(dt1);
     this.idd = dt1.id;
     this.fn = dt1.fname;
     this.ln = dt1.lname;
     this.em = dt1.email;
     this.cor = dt1.course;
     this.ps = dt1.pass;
     this.cps = dt1.cpass;
    }

    Delet(index:any){
       this.formData.splice(index,1)
    }

    Update(at:any){
     this.formData.push(at.value)
     at.value.shift(); 

    }
}
