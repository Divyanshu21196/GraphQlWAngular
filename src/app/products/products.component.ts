import { Component,inject  } from '@angular/core';
import { Firestore} from '@angular/fire/firestore';
import { ProductService } from './services/product.service';
import { Title, Meta } from '@angular/platform-browser';
import { Brands } from '../modals/Brands';
import { DEFAULT_IMG_LOGO, REQUIRED_FIELD_VALIDATION } from '../shared/constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  firestore: Firestore = inject(Firestore);
  productList:Brands[]=[];
  prodObj: Brands = {
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

  constructor(
    private data:ProductService,
    private titleService: Title,
    private metaService: Meta
    ){
    this.getAllStudents()
  }

  getAllStudents():void{
    const item$:any  =  this.data.getAllProducts();
    item$.subscribe((res:any)=>{
      this.productList=[...res];
      this.saveMetaData()
    })
  }


  saveMetaData():void{

    if(this.productList.length){
      (this.productList || []).map((e:Brands)=>{
        this.addMetaTagToPage(e);
      })
    }

  }

  addMetaTagToPage(brandMeta:Brands):void{
    this.metaService.addTag({ name: brandMeta.Name, content: brandMeta.Description });
    this.metaService.addTag({ property: 'og:image', content: brandMeta.Image })
  }

  resetForm():void{
    this.id = '';
    this.name = '';
    this.description = '';
    this.img = '';
    this.mobile = '';
  }

  addProduct():void{

   if (this.name == '' || this.description == '' || this.mobile == '') {
      alert(REQUIRED_FIELD_VALIDATION);
      return;
    }

    this.prodObj.Image = DEFAULT_IMG_LOGO;
    this.prodObj.Name = this.name;
    this.prodObj.Description = this.description;
    this.prodObj.Mobile = this.mobile;

    this.data.addProduct(this.prodObj);
    this.resetForm();
  }
  

}
