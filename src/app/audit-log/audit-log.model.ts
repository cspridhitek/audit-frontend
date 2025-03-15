export interface AuditLog {
    id: number;
    action: string;
    entityName: string;
    entityId: string;
    fieldName: string;
    oldValue: string;
    newValue: string;
    userName: string;
    timestamp: string;
    deviceDetails: string;

  }