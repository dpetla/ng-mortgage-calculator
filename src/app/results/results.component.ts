import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

import { AppService } from '../app.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  animations: [
    trigger('resultState', [
      state('hide', style({
        transform: 'translateY(100px)',
        opacity: 0,
        offset: 0
      })),
      state('show',   style({
        transform: 'translateY(0px)',
        opacity: 1,
        offset: 1
      })),
      transition('hide => show', animate(200, keyframes([
        style({
          transform: 'translateY(50px)',
          opacity: 0.5,
          offset: 0.3
        }),
        style({
          transform: 'translateY(30px)',
          opacity: 1,
          offset: 0.8
        }),
        style({
          transform: 'translateY(0px)',
          opacity: 1,
          offset: 1
        })
      ]))),
      transition('show => hide', animate(200, keyframes([
        style({
          transform: 'translateY(60px)',
          opacity: 0.5,
          offset: 0.6
        })
      ])))
    ])
  ]
})
export class ResultsComponent implements OnInit {
  isExpenseVisible = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }
  getMortgageInsurance() {
    return this.appService.mortgage.insuranceAmt;
  }
  getMortgageRequired() {
    return this.appService.mortgage.mortgageRequired;
  }
  getMonthlyPmt() {
    return this.appService.mortgage.monthlyPmt;
  }
  needMortgageInsurance() {
    return this.appService.isMortgageInsured();
  }
  getResultState() {
    return this.appService.resultState;
  }
  setResultState(state: string) {
    this.appService.resultState = state;
  }
}
