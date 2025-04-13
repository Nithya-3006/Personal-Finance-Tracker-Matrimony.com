import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit{
  expenseForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpensesService,
    private route: ActivatedRoute,
    private router:Router
  ){}  
  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      title: ['', Validators.required],
      amount: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
    });
    
  }
  onSubmit() {
    if (this.expenseForm.valid) {
      this.expenseService.addExpenses(this.expenseForm.value).subscribe({
        next:()=>{
          alert("Expense Added Successfully");
          this.router.navigate(['/expenses']);
        },error:(err)=>{console.error('Error adding expense:',err);}
      });
    } else {
      console.warn('Form is invalid', this.expenseForm.value);
    }
  }
}
