import { Component, OnInit } from '@angular/core';
import { ExpensesService} from 'src/app/services/expenses.service';
import { Expenses } from 'src/app/models/Expenses';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit , AfterViewInit{
  expenses: Expenses[] = [];
  searchTerm: string = '';
  loading: boolean = false;
  allCategories: string[] = ['Groceries', 'Lifestyle', 'Bills']; 
  category= new FormControl([]);
amountRange = { min: 0, max: 0 };
dateRange = { from: '', to: '' };

displayedColumns: string[] = ['title', 'amount', 'category', 'date', 'actions'];
dataSource = new MatTableDataSource<any>(this.expenses);
@ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor(private expenseService: ExpensesService , private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.getExpenses();
  }
  
  getExpenses() {
    this.loading = true;
    this.expenseService.getAllExpenses().subscribe({
      next: (data) => {
        this.expenses = data;
        this.dataSource.data=data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
 
  applyAdvancedFilters() {
    const filters = {
      categories: this.category.value,
      minAmount: this.amountRange.min,
      maxAmount: this.amountRange.max,
      fromDate: this.dateRange.from,
      toDate: this.dateRange.to
    };
  
    this.expenseService.getFilteredExpenses(filters).subscribe(data => {
      this.expenses = data;
      this.dataSource.data=data;
    });
  }

  applySearch() {
    if (this.searchTerm.trim()) {
      this.expenses = this.expenses.filter(expense =>
        expense.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        expense.category.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      this.dataSource.data=this.expenses;
    } else {
      this.getExpenses();  
    }
  }

  
    editExpenses(expenses:Expenses){
    const newTitle = prompt("Enter new title:",expenses.title);
    const newAmount = prompt("Enter new amount:",expenses.amount.toString());
    const newCategory = prompt("Enter new category",expenses.category);
    if(newTitle&&newAmount&&newCategory){
      const updatedExpenses={
        ...expenses,
        title: newTitle,
        amount: parseFloat(newAmount),
        category:newCategory,
      };
      this.expenseService.updateExpenses(expenses.id as number, updatedExpenses)
      .subscribe(()=>{
        this.getExpenses();
      });
    }
  }
  clearFilters() {
    this.category.setValue([]);
    this.amountRange = { min: 0, max: 0 };
    this.dateRange = { from: '', to: '' };
    this.getExpenses();
  }
  deleteExpenses(id: any) {
      if(confirm("Are you sure you want to delete this expense?")){
        this.expenseService.deleteExpenses(id).subscribe(()=>{
          this.getExpenses();
        });
      }
  }
  
}