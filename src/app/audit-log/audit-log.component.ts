import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';  // For @for support
import { AuditService } from '../services/audit.service';
import { AuditLog } from './audit-log.model';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AuditResponse } from './audit-response.model';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.css'],
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatTableModule],  // Include paginator modules
})
export class AuditLogComponent implements OnInit {
  displayedColumns: string[] = ['changedBy', 'action', 'oldValue', 'newValue', 'changedAt', 'deviceDetails'];
  dataSource = new MatTableDataSource<AuditLog>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  // Pagination variables
  totalLogs = 0;
  pageSize = 10;
  pageNo = 0;

  constructor(private auditService: AuditService) {}

  ngOnInit(): void {
    this.loadLogs();
  }

  loadLogs(): void {
    this.auditService.getAuditLogs(this.pageNo, this.pageSize).subscribe((response:AuditResponse) => {
      this.dataSource.data = response.content;
      this.totalLogs = response.totalElements;
      this.dataSource.paginator = this.paginator;
    });
  }

  // Handle pagination change
  onPageChange(event: PageEvent): void {
    this.pageNo = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadLogs();
  }

  exportToExcel(): void {
    let csvData = "Entity Name,Entity ID,Field,Old Value,New Value,Changed By,Changed At\n";
    this.dataSource.filteredData.forEach((log: AuditLog) => {
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
