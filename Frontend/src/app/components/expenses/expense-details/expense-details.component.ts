import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css'],
})
export class ExpenseDetailsComponent implements OnInit {
  expenses: any;
  constructor(
    private route: ActivatedRoute,
    private expensesService: ExpensesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log('Displaying expense', id);
      this.expensesService.getExpensesById(parseInt(id)).subscribe((data) => {
        this.expenses = data;
      });
    }
  }
}
