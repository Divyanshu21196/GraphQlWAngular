import { Injectable,inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import {getFirestore, doc, deleteDoc} from "firebase/firestore";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  firestore: Firestore = inject(Firestore);
  db = getFirestore();

  constructor() { }


//   addProduct(product : Product) {
//     product.id = this.afs.createId();
//     return this.afs.collection('/Products').add(product);
//   }

  getAllProducts() {
    const itemCollection = collection(this.firestore, 'Products');
     const item$ = collectionData(itemCollection);
     return item$
  }
}

