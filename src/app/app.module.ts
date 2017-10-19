import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatStepperModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { ResultsComponent } from './results/results.component';
import { MonthExpenseComponent } from './month-expense/month-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseDetailsComponent,
    ResultsComponent,
    MonthExpenseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTableModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
