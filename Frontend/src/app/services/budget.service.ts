import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private apiUrl = 'http://localhost:3000/api/budget';

  constructor(private http: HttpClient) { }

  createBudget(budget: any) {
    return this.http.post(this.apiUrl, budget);
  }

  getBudgets() {
    return this.http.get(this.apiUrl);
  }

}