import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
name: any="pooja";
public link= "https://www.google.com";
public test ="hi";
public role:string = "software developer";
public age:number = 12;
public flag:boolean =true;

public newname:string = "pooj Mane";
public link1:any;
public fname: any ="sagarmane";
public password:any="****";

constructor(){
   if(this.age > 18){
   this.link1="https://www.codeng.in";
   }else{
    this.link1="https://www.google.com";
   }
}
onclick(){
  console.log(this.newname);
}
}
