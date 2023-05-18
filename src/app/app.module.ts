import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyTableComponent } from './components/currencyTable/currencyTable.component';
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { CurrencyChartComponent } from './components/currencyChart/currencyChart.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    CurrencyTableComponent,
    CurrencyChartComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
