import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';
import { CustomerListElementComponent } from './components/customer-list-element/customer-list-element.component';


@NgModule({
  declarations: [ClientFormComponent,CustomerListComponent,CustomerListElementComponent],
  exports:[ClientFormComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule
  ]
})
export class InvoiceModule { }