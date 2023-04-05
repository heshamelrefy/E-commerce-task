import { Component, OnInit } from '@angular/core';
import { ProducListService } from 'src/app/services/produc-list.service';
import { IProduct } from 'src/app/shared/interfaces/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList:IProduct[]=[]
  productCategory:any={}
  productName:string=''
  constructor(private _ProducListService:ProducListService){
    this._ProducListService.getAllProducts().subscribe((res)=>{

      this.productList=res
      this.productCategory={}
      this.productList.forEach((product:any)=>{

        this.productCategory[product.category]=true
      })

    })
  }

  checkProductValueSearch()
  {
    // if(this.productName == '') {
    //   return this.productList;
    //   }
    //   return this.productList.filter(function(product) {
    //     return product.category.toLowerCase().includes(this.productName.toLowerCase())
    //   })
  }

  ngOnInit(): void {

  }
}
