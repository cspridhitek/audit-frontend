import { AuditLog } from './audit-log.model';

export interface AuditResponse {
  content: AuditLog[];
  totalElements: number;
}