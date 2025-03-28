import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserModule,
    AppComponent,
    AuditLogComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }