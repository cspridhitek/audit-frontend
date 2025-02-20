import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditLog } from '../audit-log/audit-log.model';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  private apiUrl = 'http://localhost:8080/api/audit';

  constructor(private http: HttpClient) {}

  getAuditLogs(): Observable<AuditLog[]> {
    return this.http.get<AuditLog[]>(this.apiUrl);
  }
}
