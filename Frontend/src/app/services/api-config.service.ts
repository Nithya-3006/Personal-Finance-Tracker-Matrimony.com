import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/environment'
@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  private baseUrl= environment.apiUrl;
  constructor() { }
  getBaseUrl() {
    return `${this.baseUrl}`;
  }
}
