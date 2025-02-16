import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuditLogComponent } from './audit-log/audit-log.component';

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    AppComponent,
    AuditLogComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }