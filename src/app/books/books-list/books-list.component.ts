import { Component,Input } from '@angular/core';
import { BooksSchema } from 'src/app/modals/Books';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {

  @Input() booksList:Array<BooksSchema>=[];

  
  constructor(){}

  trackBy(index:number, item:any){
    return item; 
 }

}
