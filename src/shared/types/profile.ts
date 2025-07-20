export enum EUserRole {
  Developer = 'developer',
  Manager = 'manager',
  Admin = 'admin'
}

export interface IProfile {
  fullName: string;
  email: string;
  roles: EUserRole;
  enabledEmailNotifications: boolean;
}
