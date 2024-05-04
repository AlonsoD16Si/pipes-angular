import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimerNgModule } from '../primer-ng/primer-ng.module';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';
import { OrderComponent } from './pages/order/order.component';

import { CanFlyPipe } from './pipes/can-fly.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPagesComponent,
    UncommonPagesComponent,
    OrderComponent,

    //Pipes
    CanFlyPipe,
    ToggleCasePipe,
    SortByPipe,
    ],
  imports: [
    CommonModule,
    PrimerNgModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
