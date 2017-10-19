import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-month-expense',
  templateUrl: './month-expense.component.html',
  styleUrls: ['./month-expense.component.css']
})
export class MonthExpenseComponent implements OnInit {
  mortgage = this.getMonthlyPmt();
  propertyTax = 400;
  monthDebtPmt = 0;
  utilities = 300;
  propertyInsurance = 50;
  phone = 40;
  cable = 60;
  internet = 45;
  total = 0;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getTotalMonthlyExpense();
  }
  getMonthlyPmt() {
    return this.mortgage = this.appService.mortgage.monthlyPmt;
  }
  getTotalMonthlyExpense() {
    this.total = this.getMonthlyPmt() + this.propertyTax + this.monthDebtPmt + this.utilities;
    this.total += this.propertyInsurance + this.phone + this.cable + this.internet;
  }
}
