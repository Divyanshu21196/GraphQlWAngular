import { Component,inject  } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  firestore: Firestore = inject(Firestore);
  productList:Product[]=[];
  prodObj: Product = {
    Name: '',
    Description: '',
    Image: '',
    Mobile: ''
  };
  id: string = '';
  name: string = '';
  description: string = '';
  img: string = '';
  mobile: string = '';

  constructor(private data:ProductService){
    this.getAllStudents()
  }

  ngOnInit():void{
  }


  getAllStudents() {
    const item$:any  =  this.data.getAllProducts();
    item$.subscribe((res:any)=>{this.productList=[...res]})
  }

  resetForm() {
    this.id = '';
    this.name = '';
    this.description = '';
    this.img = '';
    this.mobile = '';
  }

  addProduct():void{

   if (this.name == '' || this.description == '' || this.mobile == '') {
      alert('Fill all input fields');
      return;
    }

    this.prodObj.Image = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdefault-image&psig=AOvVaw2_Gxeq31biXlwJD9uzjTki&ust=1705923933430000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCPiXvIO07oMDFQAAAAAdAAAAABAJ';
    this.prodObj.Name = this.name;
    this.prodObj.Description = this.description;
    this.prodObj.Mobile = this.mobile;

    this.data.addProduct(this.prodObj);
    this.resetForm();
  }
  

}


export interface Product {
  Name : string,
  Description : string,
  Image : string,
  Mobile : string
}