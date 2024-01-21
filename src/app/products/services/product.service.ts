import { Injectable,inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import {setDoc,getFirestore,doc} from "firebase/firestore";
import { Product } from '../products.component';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  firestore: Firestore = inject(Firestore);
  dbRef:any = collection(this.firestore, "Products");



  constructor() { }


   makeid(length=5) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


  addProduct(product : Product) {

    const _id = this.makeid();

    const setDocRef = doc(this.firestore, "Products", _id );

      setDoc(setDocRef, product)
      .then((docRef:any) => {
        alert('Brand Info added successfully')
      }).catch((error:any) => {
      console.log(error);
      })
  }

  getAllProducts() {
     const item$ = collectionData(this.dbRef);
     return item$
  }
}

