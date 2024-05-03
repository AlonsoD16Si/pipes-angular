import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimerNgModule } from '../primer-ng/primer-ng.module';

import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimerNgModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
