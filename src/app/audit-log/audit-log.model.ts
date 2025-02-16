export interface AuditLog {
    id: number;
    entityName: string;
    entityId: string;
    fieldName: string;
    oldValue: string;
    newValue: string;
    changedBy: string;
    changedAt: string;
  }