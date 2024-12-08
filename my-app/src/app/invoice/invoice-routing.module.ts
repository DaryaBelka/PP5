import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { Routes,RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'customer-form',
    component: ClientFormComponent
  },
  {
    path: 'customer-list',
    component: CustomerListComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }