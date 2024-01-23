import { Injectable,inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import {setDoc,doc} from "firebase/firestore";
import { Brands } from 'src/app/modals/Brands';
import { FIREBASE_COLLECTION_NAME } from 'src/app/shared/constants';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  firestore: Firestore = inject(Firestore);
  dbRef:any = collection(this.firestore, FIREBASE_COLLECTION_NAME);

  constructor() { }

   makeid(length=5):string{
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


  addProduct(product : Brands):void {

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

