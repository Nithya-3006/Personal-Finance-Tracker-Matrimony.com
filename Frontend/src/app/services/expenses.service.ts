import { Injectable } from '@angular/core';
import { Expenses } from '../models/Expenses';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private apiUrl = '';

  constructor(private http: HttpClient, private apiOb: ApiConfigService) {
    this.apiUrl = this.apiOb.getBaseUrl() + '/expenses';
    console.log('Expense API URL =', this.apiUrl);
  }
  getAllExpenses(
    sortBy: string = 'date',
    sortOrder: string = 'DESC'
  ): Observable<any> {
    if (environment.USE_MOCK) {
      console.log('Fetching Mock data');
      return this.http.get('assets/expenses-mockup-data.json');
    } else {
      console.log('Calling getAllExpenses api from backend to get all data');
      const url = `${this.apiUrl}?sortBy=${sortBy}&sortOrder=${sortOrder}`;
      return this.http.get(url);
    }
  }

  getFilteredExpenses(filters: any): Observable<any> {
    console.log('Calling filterExpenses  api from backend');
    return this.http.post(`${this.apiUrl}/filter`, filters);
  }

  getExpensesById(id: number): Observable<any> {
    console.log('Calling getExpensesById api from backend');
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addExpenses(expense: any): Observable<any> {
    console.log('Calling addExpenses api from backend to add new records');
    return this.http.post(`${this.apiUrl}/form/add`, expense, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  updateExpenses(id: number, expense: any): Observable<any> {
    console.log(
      'Calling updateExpenses api from backend to edit existing record'
    );
    return this.http.put(`${this.apiUrl}/${id}`, expense);
  }

  deleteExpenses(id: number): Observable<any> {
    console.log('Calling dataExpenses api from backend to delete a record');
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getExpensesByCategory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/category/total`);
  }

  getMonthlyExpensesByCategory(year?: number, month?: number): Observable<any> {
    let url = `${this.apiUrl}/category/monthly`;
    if (year && month) {
      url += `?year=${year}&month=${month}`;
    }
    return this.http.get(url);
  }
  

}

