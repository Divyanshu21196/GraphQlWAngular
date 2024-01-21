import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphQlModule } from '../graph-ql/graph-ql.module';
import { ApolloModule } from 'apollo-angular';    // <--- this
import { HttpClientModule } from '@angular/common/http';
import { AppNoListing } from './component/Ui/no-listing-component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './constants';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppNoListing
  ],
  imports: [
    ApolloModule,
    HttpClientModule,
    CommonModule,
    GraphQlModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  exports:[
    AppNoListing
  ]
})
export class SharedModule { }
