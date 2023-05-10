import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  public myForm: any;
  public courses: any = ['Engineering', "MCA", "BTech Agri", "MCS", "MSC"];
  public isSubmitted:boolean= false;
  
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fname: ['Suresh', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      course: [''],
      gender: [''],
      pass: [''],
      cpass: ['']
    })
    
  }
  
  onSubmitData() {
    console.log(this.myForm.value);
    this.isSubmitted= true;
  }

  get f(){
    // console.log(this.myForm.controls);
    console.log(this.myForm.controls['email']);
    return this.myForm.controls;
  }

}
