import { Routes } from '@angular/router';
import { ProductFormsComponent } from './product/components/product-forms/product-forms.component';

export const routes: Routes = [
   {path: 'invoice', 
   loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
   },

   {path: 'product-form', component: ProductFormsComponent}
];
