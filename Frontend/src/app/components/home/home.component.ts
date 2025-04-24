import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  companyName='Finance Manager';
  formData = {
    name: '',
    email: '',
    message: ''
  };
  submitted:boolean =false;

  onSubmit() {
    this.submitted=true;
    console.log('Form Submitted:', this.formData);
  }
}
