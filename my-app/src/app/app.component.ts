import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './invoice/components/client-form/client-form.component';
import { InvoiceModule } from './invoice/invoice.module';
import { ProductModuleModule } from './product/product.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InvoiceModule, ProductModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Darya Belka';
}
