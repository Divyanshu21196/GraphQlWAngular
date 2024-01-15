import { Component,inject  } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  firestore: Firestore = inject(Firestore);

  constructor(){
    const itemCollection = collection(this.firestore, 'items');
    // this.item$ = collectionData(itemCollection);
  }

  ngOnInit():void{

  }

}
