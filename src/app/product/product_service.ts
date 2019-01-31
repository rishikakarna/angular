import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable() //DI
export class ProductService {

  sendToServer(product: Product) {
    //our code to communicate with server will be here

  }
  retrieveFromServer() : Product[]{
    let prod1 = new Product(1,"amar",12000,3);
    let prod2 = new Product(2,"efg",1350,7);
    let prod3 = new Product(3,"ijk",12553,2);

    let products = [prod1, prod2, prod3];
    return products;
  }
}