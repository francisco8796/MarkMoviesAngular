import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HttpClientModule } from '@angular/common/http';
import { Top10Pipe } from './top10.pipe';
import { Top10DataTableComponent } from './components/top10-data-table/top10-data-table.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YearsComponent } from './components/years/years.component';
import { YearsDataTableComponent } from './components/years-data-table/years-data-table.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    Top10Pipe,
    Top10DataTableComponent,
    MoreDetailsComponent,
    YearsComponent,
    YearsDataTableComponent,
  ],
  imports: [
    InfiniteScrollModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
