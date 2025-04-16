import { Component, OnInit, signal } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Expenses } from 'src/app/models/Expenses';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit, AfterViewInit {
  expenses: Expenses[] = [];
  searchTerm: string = '';
  loading: boolean = false;
  allCategories: string[] = ['Groceries', 'Lifestyle', 'Bills'];
  category = new FormControl([]);
  amountRange = { min: 0, max: 0 };
  dateRange = { from: '', to: '' };
  displayedColumns: string[] = [
    'title',
    'amount',
    'category',
    'date',
    'actions',
  ];
  today: Date = new Date();
  totalExpenses: number = 0;
  expensesPerCategory: any = [];
  monthlyExpensesByCategory: { category: string; total: number }[] = [];
  monthlyTotal = 0;
  selectedYear?: number;
  selectedMonth?: number;
  readonly panelOpenState = signal(false);
  dataSource = new MatTableDataSource<any>(this.expenses);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private expenseService: ExpensesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('Executed ngOnInit');
    this.getExpenses();
    this.fetchExpensesByCategory();
    this.fetchMonthlyCategoryTotals();
  }

  ngAfterViewInit() {
    console.log('Executed ngAfterViewInit');
    this.dataSource.paginator = this.paginator;
  }

  getExpenses() {
    this.loading = true;
    console.log('Loading data from expenseService');
    this.expenseService.getAllExpenses().subscribe({
      next: (data) => {
        console.log('Sorting fetched data for uniform look');
        const sortedData = data.sort(
          (a: Expenses, b: Expenses) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        this.expenses = sortedData;
        this.dataSource.data = sortedData;
        this.loading = false;
        console.log('Loaded and sorted data , Loading status:', this.loading);
      },
      error: (err) => {
        this.loading = false;
        console.error('Error when fetching expenses ', err);
      },
    });
  }

  applyAdvancedFilters() {
    const filters = {
      categories: this.category.value,
      minAmount: this.amountRange.min,
      maxAmount: this.amountRange.max,
      fromDate: this.dateRange.from,
      toDate: this.dateRange.to,
    };
    console.log('Loading filtered data from expenseService');
    this.expenseService.getFilteredExpenses(filters).subscribe((data) => {
      console.log('Data loaded . Sorting the loaded data');
      const sortedData = data.sort(
        (a: Expenses, b: Expenses) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      this.expenses = sortedData;
      if (this.searchTerm.trim()) {
        console.log('Applying search on filtered data ', this.searchTerm);
        this.expenses = this.expenses.filter((expense) =>
          expense.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
      console.log('Filtered data sorted and loaded');
      this.dataSource.data = this.expenses;
    });
  }

  applySearch() {
    if (this.searchTerm.trim()) {
      console.log('Searching for ', this.searchTerm);
      this.expenses = this.expenses.filter((expense) =>
        expense.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

      this.dataSource.data = this.expenses;
      console.log('Loaded Matching data');
    } else {
      this.getExpenses();
      console.warn('No Search term detected');
    }
  }

  clearFilters() {
    console.log('Resetting all filter parameters.');
    this.category.setValue([]);
    this.amountRange = { min: 0, max: 0 };
    this.dateRange = { from: '', to: '' };
    this.searchTerm = '';
    this.getExpenses();
  }
  deleteExpenses(id: any) {
    console.log('Requesting Confirmation to delete expense number', id);
    if (confirm('Are you sure you want to delete this expense?')) {
      const deletedExpense = this.expenses.find((exp) => exp.id === id);
      console.log('Expense to be deleted:', deletedExpense);
      this.expenseService.deleteExpenses(id).subscribe(() => {
        this.getExpenses();
      });
      console.log('Expense number ', id, ' deleted');
    } else {
      console.warn('Expense number ', id, ' not deleted');
    }
  }

  fetchExpensesByCategory(): void {
    this.expenseService.getExpensesByCategory().subscribe((data) => {
      this.expensesPerCategory = data.map((entry: any) => ({
        category: entry.category,
        total: Number(entry.total),
      }));
      this.totalExpenses = this.expensesPerCategory.reduce(
        (sum: number, entry: any) => sum + (entry.total as number),
        0
      );
      console.log('Calculated total expenses ', this.totalExpenses);
    });
  }

  fetchMonthlyCategoryTotals(): void {
    this.expenseService
      .getMonthlyExpensesByCategory(this.selectedYear, this.selectedMonth)
      .subscribe(
        (response) => {
          const receivedData = response.data;
          const dataMap = receivedData.reduce(
            (acc: { [key: string]: number }, item: any) => {
              acc[item.category] = parseFloat(item.total);
              return acc;
            },
            {}
          );
          this.monthlyExpensesByCategory = this.allCategories.map(
            (category) => ({
              category,
              total: dataMap[category] ?? 0,
            })
          );
          this.monthlyTotal = this.monthlyExpensesByCategory.reduce(
            (sum, entry) => sum + entry.total,
            0
          );
        },
        (error) => {
          console.error('Error fetching monthly category totals', error);
        }
      );
  }
}
