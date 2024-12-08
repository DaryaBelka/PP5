function showForm(): void {
   (document.getElementById('customer-list') as HTMLElement).style.display = "none";
   (document.getElementById('customer-form') as HTMLElement).style.display = "block";
}

function showList(): void {
   (document.getElementById('customer-list') as HTMLElement).style.display = "block";
   (document.getElementById('customer-form') as HTMLElement).style.display = "none";

   const ul = document.getElementById('customer-list-data') as HTMLElement;
   ul.innerHTML = "Lista klientów:";

   customersList.forEach((customer: Customer) => {
      ul.innerHTML += `<li class="list-group-item">${customer.name} (${customer.getAdress()})
         <button class="btn btn-primary" onclick="showCustomer(${customer.id})">Edytuj</button>
       </li>`;
   });
}

interface Customer {
   id: number | null;
   name: string;
   nip: string;
   city: string;
   street: string;
   houseNumber: string;
   apartmentNumber: string;
   postalCode: string;
   comments: string;
   field: string;
   isActive: boolean;
   getAdress?: () => string;
}

let customersList: Customer[] = [];

function showCustomer(customerId: number): void {
   const customer = customersList.find((customer) => customer.id === customerId);
   if (customer) {
      (document.getElementById('customerId') as HTMLInputElement).value = customer.id!.toString();
      addDataToForm(customer);
      enableFormEl();
      showForm();
   }
}

function save(event: Event): boolean {
   event.preventDefault();
   const clientId = (document.getElementById('customerId') as HTMLInputElement).value;
   const newCustomer: Customer = {
      id: clientId ? parseInt(clientId) : Math.floor(Math.random() * 10001),
      name: (document.getElementById('inputName') as HTMLInputElement).value,
      nip: (document.getElementById('nip') as HTMLInputElement).value,
      city: (document.getElementById('inputCity') as HTMLInputElement).value,
      street: (document.getElementById('inputStreet') as HTMLInputElement).value,
      houseNumber: (document.getElementById('inputHouseNumber') as HTMLInputElement).value,
      apartmentNumber: (document.getElementById('inputApartNumber') as HTMLInputElement).value,
      postalCode: (document.getElementById('inputPostcode') as HTMLInputElement).value,
      comments: (document.getElementById('comments') as HTMLInputElement).value,
      field: (document.getElementById('field') as HTMLInputElement).value,
      isActive: (document.getElementById('isActive') as HTMLInputElement).checked
   };

   if (clientId) {
      const index = customersList.findIndex(c => c.id === parseInt(clientId));
      customersList[index] = newCustomer;
   } else {
      customersList.push(newCustomer);
   }

   (document.getElementById('customerId') as HTMLInputElement).value = "";

   showList();
   addDataToForm(getEmptyCustomer());
   console.log(newCustomer);

   return false;
}

function getCustomer(): Customer {
   return {
      id: null,
      name: 'Test',
      nip: '1234567',
      city: 'Kraków',
      street: 'Krakowska',
      houseNumber: '19',
      apartmentNumber: '1',
      postalCode: '12-345',
      comments: '',
      field: 'IT',
      isActive: true
   };
}

function getEmptyCustomer(): Customer {
   return {
      id: null,
      name: "",
      nip: "",
      city: "",
      street: "",
      houseNumber: "",
      apartmentNumber: "",
      postalCode: "",
      comments: "",
      field: "",
      isActive: false
   };
}

function addDataToForm(newCustomer: Customer): void {
   (document.getElementById('inputName') as HTMLInputElement).value = newCustomer.name;
   (document.getElementById('nip') as HTMLInputElement).value = newCustomer.nip;
   (document.getElementById('inputCity') as HTMLInputElement).value = newCustomer.city;
   (document.getElementById('inputStreet') as HTMLInputElement).value = newCustomer.street;
   (document.getElementById('inputHouseNumber') as HTMLInputElement).value = newCustomer.houseNumber;
   (document.getElementById('inputApartNumber') as HTMLInputElement).value = newCustomer.apartmentNumber;
   (document.getElementById('inputPostcode') as HTMLInputElement).value = newCustomer.postalCode;
   (document.getElementById('field') as HTMLInputElement).value = newCustomer.field;
   (document.getElementById('isActive') as HTMLInputElement).checked = newCustomer.isActive;
}

function disableFormEl(): void {
   const formElements = document.querySelectorAll<HTMLFormElement>('form input, form select, form textarea');
   formElements.forEach(element => { element.disabled = true; });
}

function enableFormEl(): void {
   const formElements = document.querySelectorAll<HTMLFormElement>('form input, form select, form textarea');
   formElements.forEach(element => { element.disabled = false; });
}
