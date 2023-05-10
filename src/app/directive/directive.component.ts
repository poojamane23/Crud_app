import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  public showdata: any ="hi how are you";
  public showFlag:boolean=true;
  public gender:any= "male";
  public age: number = 22;
  public showgender: any="he is male"
public male: any;
public country: any = ['India','japan','china','malashiya','srilanka']
public selectedCounter = "japan";
}
