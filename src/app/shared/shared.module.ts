import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ToastrModule } from 'ngx-toastr';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { DropdownModule } from 'primeng/dropdown';
import { ProductNameFilterPipe } from './pipes/product-name-filter.pipe'
@NgModule({
  declarations: [
    ProductCardComponent,
    CategoryFilterPipe,
    ProductNameFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    ToastModule,
    DropdownModule
  ],
  exports:[
    ProductCardComponent,
    CategoryFilterPipe,
    ProductNameFilterPipe
  ],
  providers: [MessageService, ConfirmationService],
})
export class SharedModule { }
