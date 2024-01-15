import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphQlModule } from '../graph-ql/graph-ql.module';
import { ApolloModule } from 'apollo-angular';    // <--- this
import { HttpClientModule } from '@angular/common/http';
import { AppNoListing } from './component/Ui/no-listing-component';



@NgModule({
  declarations: [
    AppNoListing
  ],
  imports: [
    ApolloModule,
    HttpClientModule,
    CommonModule,
    GraphQlModule
  ],
  exports:[
    AppNoListing
  ]
})
export class SharedModule { }
