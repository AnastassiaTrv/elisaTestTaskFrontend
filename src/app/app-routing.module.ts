import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';

const ROUTES: Routes = [
  {path: 'catalog', component: ProductCatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
