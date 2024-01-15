import { Component } from '@angular/core';


import { getBooksListing } from '../graph-ql/Graph-Ql-Queries/booksQuery';


import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  booksGQLQuery!:any;
  booksQuery: any;
  booksListingSubscription$!:Subscription;
  booksListing:Array<BooksSchema>=[];

  constructor(
    private apollo:Apollo,
  ){
    this.booksGQLQuery = getBooksListing();
  }


  ngOnInit():void{
    this.booksQuery = this.apollo.watchQuery({
      query: this.booksGQLQuery,
    });  
    this.getBooksListing();
  }


  getBooksListing():void{
  
    this.booksListingSubscription$ = this.booksQuery.valueChanges.subscribe((result:any) => {
      
      if(result.data.brooks && result.data.brooks.length){
        this.booksListing  = [...result.data.brooks];
      }
    });
  }

  ngOnDestroy(){
    this.booksListingSubscription$?.unsubscribe();
  }

}

export interface BooksSchema {
  bookCode: number;
  bookName: string;
  createdAt: Date;
  id: string;
  quantity:number;
  bookImage:any;
}
