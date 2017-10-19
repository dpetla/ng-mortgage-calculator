import { Component, DoCheck, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.css']
})
export class PurchaseDetailsComponent implements OnInit, DoCheck  {
  periods = [
    {value: 5, viewValue: '5 years'},
    {value: 10, viewValue: '10 years'},
    {value: 15, viewValue: '15 years'},
    {value: 20, viewValue: '20 years'},
    {value: 25, viewValue: '25 years'},
    {value: 30, viewValue: '30 years'},
  ];
  purchaseForm: FormGroup;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.purchaseForm = new FormGroup({
      'price': new FormControl(null, [Validators.required]),
      'downPmt': new FormControl(null, [Validators.required]),
      'rate': new FormControl(null, [Validators.required]),
      'period': new FormControl(null, [Validators.required]),
    });
    this.needMortgageInsurance();
  }

  ngDoCheck() {
    if (this.purchaseForm.dirty && this.appService.resultState === 'show') {
      this.appService.resultState = 'hide';
    }
  }

  onCalculateMortgage() {
    this.appService.updateMortgage();
    this.appService.resultState = 'show';
    this.purchaseForm.markAsPristine();
  }

  getHomePrice() {
    return this.appService.mortgage.homePrice;
  }
  setHomePrice(price: number) {
    this.appService.mortgage.homePrice = price;
  }
  getDownPmt() {
    return this.appService.mortgage.downPmt;
  }
  setDownPmt(downPmt: number) {
    this.appService.mortgage.downPmt = downPmt;
    this.getDownPmtPerc();
    if (this.getDownPmtPerc() < 0.2 && this.getPeriod() === 30) {
      this.setPeriod(25);
    }
  }
  getRate() {
    return this.appService.mortgage.rate;
  }
  setRate(rate: number) {
    this.appService.mortgage.rate = rate;
  }
  getPeriod() {
    return this.appService.mortgage.period;
  }
  setPeriod(period: number) {
    this.appService.mortgage.period = period;
    this.getDownPmtPerc();
    if (this.getPeriod() === 30 && this.getDownPmtPerc() < 0.2) {
      this.setDownPmt(this.getHomePrice() * 0.2);
    }
  }
  getDownPmtPerc() {
    return this.appService.mortgage.downPmtPerc;
  }
  needMortgageInsurance() {
    return this.appService.isMortgageInsured();
  }
}
