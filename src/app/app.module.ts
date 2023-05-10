import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TemplateForm2Component } from './template-form2/template-form2.component';
import { PrimengComponent } from './primeng/primeng.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectiveComponent,
    TemplateFormComponent,
    TemplateForm2Component,
    PrimengComponent,
    ReactiveFormComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
