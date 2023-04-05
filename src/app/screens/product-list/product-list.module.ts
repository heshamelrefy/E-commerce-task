import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    SharedModule,
    ToastrModule,
    FormsModule
  ]
})
export class ProductListModule { }
