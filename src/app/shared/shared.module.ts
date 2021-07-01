import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { LoadingComponent } from './loading/loading.component';
import { IfNoUserDirective } from './if-no-user-directive';
import { IfUserDirective} from './if-user-directive';
import { FormFieldInputDirective } from './form-field-input.directive';



@NgModule({
  declarations: [
    FormFieldComponent,
    LoadingComponent,
    IfNoUserDirective,
    IfUserDirective,
    FormFieldInputDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    FormFieldComponent,
    FormFieldInputDirective,
    IfNoUserDirective,
    IfUserDirective

  ]
})
export class SharedModule { }
