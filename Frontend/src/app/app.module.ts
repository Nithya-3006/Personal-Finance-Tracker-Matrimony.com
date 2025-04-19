import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { EditExpenseComponent } from './components/expenses/edit-expense/edit-expense.component';
import { ExpenseDetailsComponent } from './components/expenses/expense-details/expense-details.component';
import { ExpenseFormComponent } from './components/expenses/expense-form/expense-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // optional, if you're using input fields in table/filter
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { BudgetFormComponent } from './components/budget/budget-form/budget-form.component';
import { BudgetListComponent } from './components/budget/budget-list/budget-list.component';
import { BudgetPageComponent } from './components/budget/budget-page/budget-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    EditExpenseComponent,
    ExpenseDetailsComponent,
    ExpenseFormComponent,
    BudgetPageComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatChipsModule,
    MatSliderModule,
    MatExpansionModule,
    BudgetFormComponent,
    BudgetListComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
