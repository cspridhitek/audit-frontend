// src/app/audit/audit-log/audit-log.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import this for @for support
import { AuditService } from '../services/audit.service';
import { AuditLog } from './audit-log.model';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.css'],
  standalone: true,
  imports: [CommonModule],  // ✅ Required for @for support

})
export class AuditLogComponent implements OnInit {
  auditLogs: AuditLog[] = [];
  filteredLogs: AuditLog[] = [];
  searchTerm: string = '';

  constructor(private auditService: AuditService) {}

  ngOnInit(): void {
    this.loadLogs();
  }

  loadLogs(): void {
    this.auditService.getAuditLogs().subscribe(data => {
      this.auditLogs = data;
      console.log(data);
      this.filteredLogs = data;
    });
  }

  filterLogs(): void {
    this.filteredLogs = this.auditLogs.filter(log =>
      log.entityName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      log.userName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  exportToExcel(): void {
    let csvData = "Entity Name,Entity ID,Field,Old Value,New Value,Changed By,Changed At\n";
    this.filteredLogs.forEach(log => {
      csvData += `${log.entityName},${log.entityId},${log.fieldName},${log.oldValue},${log.newValue},${log.userName},${log.timestamp}\n`;
    });

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'audit_logs.csv');
    a.click();
  }

  trackByEntityId(index: number, log: AuditLog): number {
    return index;
  }
}
