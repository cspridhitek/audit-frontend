import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AuditLog } from '../audit-log/audit-log.model';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  private apiUrl = 'http://localhost:8081/api/audit?page=0&size=10&sortBy=timestamp&sortDirection=desc';

  constructor(private http: HttpClient) {}

  getAuditLogs(): Observable<AuditLog[]> {
    return this.http.get<{ content: AuditLog[] }>(this.apiUrl).pipe(
      map(response => response.content) // Extracts logs from `content`
    );
  }
}
