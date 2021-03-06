import { Finance } from 'financejs';

import { Mortgage } from './mortgage.model';

export class AppService {
  mortgage: Mortgage = new Mortgage(400000, 60000, 3.86, 25, 0);
  resultState = 'hide';

  isMortgageInsured() {
    this.mortgage.downPmtPerc = this.mortgage.downPmt / this.mortgage.homePrice;
    return this.mortgage.downPmtPerc < 0.2;
  }

  getInsuranceRate() {
    if (this.mortgage.downPmtPerc < 0.1) { return 0.04; }
    if (this.mortgage.downPmtPerc < 0.15) { return 0.031; }
    if (this.mortgage.downPmtPerc < 0.2) {
      return 0.028;
    } else  {
      return 0.0;
    }
  }

  updateMortgage() {
    this.isMortgageInsured();
    this.mortgage.mortgageRequired = this.getMortgageRequired();
    this.mortgage.insuranceAmt = this.getInsuranceAmt();
    this.mortgage.monthlyPmt = this.getMonthlyPmt();
  }

  getMortgageRequired() {
    return this.mortgage.homePrice - this.mortgage.downPmt + this.getInsuranceAmt();
  }

  getInsuranceAmt() {
    if (this.mortgage.downPmtPerc >= 0.2) {
      return 0;
    } else {
      return (this.mortgage.homePrice - this.mortgage.downPmt) * this.getInsuranceRate();
    }
  }

  getMonthlyPmt() {
    const finance = new Finance();
    return finance.AM(this.mortgage.mortgageRequired, this.mortgage.rate, this.mortgage.period, 0);
  }
}
