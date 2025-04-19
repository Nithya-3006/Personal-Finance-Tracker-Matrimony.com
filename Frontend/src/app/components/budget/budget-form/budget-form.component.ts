import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Budget {
  id: number;
  category: string;
  limit: number;
  created_at: string;
}

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class BudgetFormComponent implements OnInit {

  budget: Budget = {
    id: 0,
    category: '',
    limit: 0,
    created_at: ''
  };

  budgets: Budget[] = [];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.getBudgets();
  }

  onSubmit() {
    this.budgetService.createBudget(this.budget).subscribe((response) => {
      console.log(response);
      this.getBudgets();
    });
  }

  getBudgets() {
    this.budgetService.getBudgets().subscribe((response: any) => {
      this.budgets = response;
    });
  }

}