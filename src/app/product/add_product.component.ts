import { Product } from './product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product_service';

@Component({
  selector: 'add_prod',
  templateUrl: './add_product.component.html'
})
export class AddProductComponent {

  product: Product = new Product();

  // this is where injection happens
  constructor(private ps: ProductService) {

  }

  add(pform) {
    /*  console.log("add...");
        console.log(pform.value);
        console.log(JSON.stringify(this.product)); */

    //no need to create obj if we use DI
    // let ps = new ProductService();

    this.ps.sendToServer(this.product);
  }

  /*add() {
    console.log("add...");
    console.log(JSON.stringify(this.product));
  }*/
}