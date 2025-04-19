import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BudgetListComponent } from './app/budget-list/budget-list.component';
import { BudgetFormComponent } from './app/budget-form/budget-form.component';

bootstrapApplication(AppComponent, {
  providers: [...appConfig.providers],
}).catch((err) => console.error(err));