import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { 
    path: '', 
    
    children: 
    [
      { 
          path: '', 
          component: ProductsComponent, 
          children:[
            { 
              path: 'listing', 
              component: ProductsComponent ,
              data: { title: '' } 
            },
            { path: '', redirectTo: 'listing', pathMatch: 'full' },    
          ],
           
          data: { title: '' } 
        }, 
          
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
