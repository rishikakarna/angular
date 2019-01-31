import { Component } from '@angular/core';      //Destructuring

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        {{title}}!
      </h1>
      <ul class="nav navbar-nav">
        <li><a [routerLink]="['/add_prod']">Add</a></li>
        <li><a [routerLink]="['/product']">List</a></li>
      </ul>
     <div class='container'>
     <router-outlet></router-outlet>
     </div>
    </div>
      `,
  styles: []
})
export class AppComponent {
  title = 'Hey ya!!!!';
}
 // <product></product>