"use strict";
class Customer {
    constructor() {
        this.id = "";
        this.name = "";
        this.nip = "";
        this.city = "";
        this.street = "";
        this.houseNumber = "";
        this.apartmentNumber = "";
        this.postalCode = "";
        this.comments = "";
        this.field = "";
        this.isActive = true;
        this.adress = "";
    }
    getAdress() {
        this.adress = `Miasto: ${this.city}, ul.${this.street} ${this.houseNumber}/${this.apartmentNumber}, ${this.postalCode}`;
        return this.adress;
    }
}
class Supplier extends Customer {
    constructor(accountNumber) {
        super();
        this.invoices = [];
        this.accountNumber = accountNumber;
    }
}