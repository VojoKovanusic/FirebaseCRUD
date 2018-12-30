import { Injectable } from '@angular/core';
import { Employer } from '../model/Employer';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  
  employees: Employer[]
  constructor() { }


  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async sleep() {
    console.log("Trenutno: " + new Date().toString());
    // Sleep thread for 3 seconds
    await this.delay(3000);
    console.log("Nakon pet sekundi " + new Date().toString());
  }




}