import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './shared/customer.service';

@NgModule({
  declarations: [
    AppComponent, 
    HomePageComponent, CustomerComponent, CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
