import { Component } from '@angular/core';
import { getBooksListing } from '../graph-ql/Graph-Ql-Queries/booksQuery';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { BooksSchema } from '../modals/Books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  booksListingSubscription$!:Subscription;
  booksListing:Array<BooksSchema>=[];
  booksGQLQuery!:any;
  booksQuery: any;

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


