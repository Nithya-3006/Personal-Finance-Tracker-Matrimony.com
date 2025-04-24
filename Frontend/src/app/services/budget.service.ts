import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private apiUrl = '';

  constructor(private http: HttpClient, private apiOb: ApiConfigService) {
    this.apiUrl = this.apiOb.getBaseUrl() + '/budget';
    console.log('Budget API URL =', this.apiUrl);
  }
  createBudget(budget: any):Observable<any> {
    return this.http.post(this.apiUrl, budget);
  }

  getBudgets():Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
