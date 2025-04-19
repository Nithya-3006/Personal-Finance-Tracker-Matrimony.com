import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { CommonModule } from '@angular/common';

interface Budget {
  id: number;
  category: string;
  limit: number;
  created_at: string;
}

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class BudgetListComponent implements OnInit {

  budgets: Budget[] = [];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.getBudgets();
  }

  getBudgets() {
    this.budgetService.getBudgets().subscribe((response: any) => {
      this.budgets = response;
    });
  }

}