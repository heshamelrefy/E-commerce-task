import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProducListService } from 'src/app/services/produc-list.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  checkoutForm!: FormGroup
  count:number =0
  totalPrice:number =0
  constructor(private fb:FormBuilder,private _ProductService: ProducListService)
  {
    this.checkoutForm =this.fb.group({
      ['fullName']:['',[Validators.required ,Validators.minLength(3),Validators.maxLength(20)]],
      ['email']:['',[Validators.required,Validators.email]],
      ['Adddress']:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      ['city']:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      ['cardName']:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      ['cardNumber']:['',[Validators.required,Validators.pattern(/[0-9]{12}$/)]],
      ['expMonth']:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
    })

    this._ProductService.productsCarts.subscribe((products:any)=>{

      this.totalPrice=0
      this.count=0
      for (const key in products) {
        this.count+= products[key]?.count
       this.totalPrice+= products[key]?.count * products[key].product.price
      }
    })
  }

  checkout()
  {
    this._ProductService.checkout()
  }
}
