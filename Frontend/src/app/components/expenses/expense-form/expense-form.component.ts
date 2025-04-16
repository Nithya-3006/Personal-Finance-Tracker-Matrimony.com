import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Router } from '@angular/router';
import { ValidatorFn } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenseFormComponent implements OnInit {
  expenseForm!: FormGroup;
  categories: any[] = [
    { value: 'Groceries', viewValue: 'Groceries' },
    { value: 'Lifestyle', viewValue: 'Lifestyle' },
    { value: 'Bills', viewValue: 'Bills' },
  ];

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpensesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    console.log('Add Expenses from initialized');
    const today = new Date();
    this.expenseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      amount: ['', [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      date: [today, [Validators.required, this.maxDateValidator(today)]],
    });
  }

  maxDateValidator(maxDate: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const selectedDate = new Date(control.value);
      return selectedDate > maxDate ? { maxDate: true } : null;
    };
  }

  onSubmit() {
    console.log('Form submit clicked');

    if (this.expenseForm.valid) {
      const formattedDate = new Date(this.expenseForm.value.date)
        .toISOString()
        .substring(0, 10);
      const expense = {
        ...this.expenseForm.value,
        date: formattedDate,
      };
      this.expenseService.addExpenses(this.expenseForm.value).subscribe({
        next: () => {
          console.log(this.expenseForm.value);
          alert('Expense Added Successfully');
          console.log('Expense Added Successfully ');
          this.router.navigate(['/expenses']);
          console.log('Redirected from Add expenses form to expenses ');
        },
        error: (err) => {
          console.error('Error in adding expense:', err);
        },
      });
    } else {
      console.warn('Form is invalid', this.expenseForm.value);
    }
  }
}
