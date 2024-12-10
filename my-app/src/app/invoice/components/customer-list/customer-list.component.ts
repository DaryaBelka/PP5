import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})

export class CustomerListComponent implements OnInit, OnDestroy{
  customersList: Customer[] = [];
  constructor(
    private customerService: CustomerService,
    private router: Router
  ){
    console.log(this.customerService.getCustomers());
  }

  ngOnDestroy(): void {
      console.log('opuszczam komponent')
  }

  ngOnInit(): void {
    this.customersList = this.customerService.getCustomers();
  }

  redirectToForm(){
    this.router.navigate(['/invoice/customer-form'])
  }

  deleteCustomer(customer:Customer){
    console.log('rodzic ma usunac:', customer)
    this.customersList = this.customerService.removeCustomer(customer);
  }

}
