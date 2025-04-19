import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from './api-config.service';
@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private apiUrl = '';
 
 constructor(private http: HttpClient, private apiOb: ApiConfigService) {
     this.apiUrl = this.apiOb.getBaseUrl() + '/budget';
     console.log('Budget API URL =', this.apiUrl);
   }
  createBudget(budget: any) {
    return this.http.post(this.apiUrl, budget);
  }

  getBudgets() {
    return this.http.get(this.apiUrl);
  }

}