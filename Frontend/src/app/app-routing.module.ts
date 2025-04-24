import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseDetailsComponent } from './components/expenses/expense-details/expense-details.component';
import { ExpenseFormComponent } from './components/expenses/expense-form/expense-form.component';
import { EditExpenseComponent } from './components/expenses/edit-expense/edit-expense.component';
import { BudgetPageComponent } from './components/budget/budget-page/budget-page.component';
import { HomeComponent } from './components/home/home.component';
import { BudgetListComponent } from './components/budget/budget-list/budget-list.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'expenses',component: ExpensesComponent},
  {path: 'expenses/:id',component:ExpenseDetailsComponent},
  {path: 'edit-expenses/:id',component:EditExpenseComponent},
  {path: 'expensesform',component:ExpenseFormComponent},
  {path: 'budget',component:BudgetPageComponent},
  {path: 'budget/list',component:BudgetListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
