import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuditLogComponent } from './audit/audit-log/audit-log.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent,
    AuditLogComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }