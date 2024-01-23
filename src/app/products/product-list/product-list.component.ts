import { Component,Input } from '@angular/core';
import { Brands } from 'src/app/modals/Brands';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() productList:Array<Brands>=[];

  constructor(){}

}
