import { Component,Input } from '@angular/core';
import { Product } from '../products.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() productList:Array<any>=[];

  constructor(){}

}
