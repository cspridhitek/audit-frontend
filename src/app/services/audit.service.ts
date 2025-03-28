import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AuditLog } from '../audit-log/audit-log.model';
import { AuditResponse } from '../audit-log/audit-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  private apiUrl = 'http://localhost:8081/api/audit';

  constructor(private http: HttpClient) {}

  getAuditLogs(pageNo: number, pageSize: number): Observable<AuditResponse> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString())
      .set('sortBy',"timestamp")
      .set('soreDirection', "desc");

    return this.http.get<AuditResponse>(this.apiUrl, { params });
  }
}
