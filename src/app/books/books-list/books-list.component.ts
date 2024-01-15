import { Component,Input } from '@angular/core';
import { BooksSchema } from '../books.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {

  @Input() booksList:Array<BooksSchema>=[];

  
  constructor(){}

  ngOnInit():void{}

  trackBy(index:number, item:any){
    return item; 
 }

}
