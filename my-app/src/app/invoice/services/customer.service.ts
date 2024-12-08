import { Injectable } from '@angular/core';
import { Customer } from '../models/customer'
@Injectable({
   providedIn: 'root'
})
export class CustomerService {

   constructor() { }
   private customersList: Customer[] = []
   addCustomer(customer: Customer) {
      this.customersList.push(customer)
      console.log(customer)
      console.log('zawartość service:', this.customersList)


   }
   getCustomers(): Customer[] {
      return this.customersList;
   }
}