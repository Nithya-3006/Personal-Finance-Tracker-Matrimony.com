import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpensesService } from 'src/app/services/expenses.service';
@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css'],
})
export class EditExpenseComponent implements OnInit {
  expenses: any = { id: '', title: '', amount: '', date: '', category: '' };
  categories: any[] = [
    { value: 'Groceries', viewValue: 'Groceries' },
    { value: 'Lifestyle', viewValue: 'Lifestyle' },
    { value: 'Lifestyle', viewValue: 'Lifestyle' },
  ];
  constructor(
    private route: ActivatedRoute,
    private expensesService: ExpensesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log('Edit form initialized for Expense', id);
      this.expensesService
        .getExpensesById(parseInt(id))
        .subscribe((data: any) => {
          this.expenses = data;
        });
    }
  }

  updateExpenses() {
    console.log('Edited Expense', this.expenses.id, ' values: ', this.expenses);
    this.expensesService
      .updateExpenses(this.expenses.id, this.expenses)
      .subscribe(() => {
        alert('Expense updated successfully!');
        console.log('Expense Updated');
        this.router.navigate(['/expenses']);
        console.log('Reditecting from Edit Expense Form to Expenses');
      });
  }
}
