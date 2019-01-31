import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeListComponent } from './employee-list.component';
import { ProductListComponent } from './product/product_list.component';
import { AddProductComponent } from './product/add_product.component';
import { ProductService } from './product/product_service';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, AddProductComponent,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      {path: 'add_prod', component: AddProductComponent},
      {path: 'product', component: ProductListComponent}
    ])
  ],
  //provider array used for DI
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
