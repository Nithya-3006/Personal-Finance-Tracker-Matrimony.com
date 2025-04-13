import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseDetailsComponent } from './components/expenses/expense-details/expense-details.component';
import { ExpenseFormComponent } from './components/expenses/expense-form/expense-form.component';
import { EditExpenseComponent } from './components/expenses/edit-expense/edit-expense.component';

const routes: Routes = [
  {path:'',redirectTo:'expenses',pathMatch:'full'},
  {path: 'expenses',component: ExpensesComponent},
  {path: 'expenses/:id',component:ExpenseDetailsComponent},
  {path: 'edit-expenses/:id',component:EditExpenseComponent},
  {path: 'expensesform',component:ExpenseFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
