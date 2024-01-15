import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';

const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: '',
            redirectTo: 'book',
            pathMatch: 'full'
        },
        {
            path: 'book',
            component: BooksComponent
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
