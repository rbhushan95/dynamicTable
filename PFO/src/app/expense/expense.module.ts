import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesHomeComponent } from './expenses-home/expenses-home.component';
import { RentallocationComponent } from './rentallocation/rentallocation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExpensesHomeComponent, RentallocationComponent],
  exports: [ExpensesHomeComponent, RentallocationComponent]
})
export class ExpenseModule { }
