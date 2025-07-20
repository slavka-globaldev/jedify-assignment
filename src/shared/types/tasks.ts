export enum ETaskStatus {
  Pending = 'pending',
  Completed = 'completed'
}

export enum ETaskPriority {
  Low = 'low',
  Medium = 'medium',
  High = 'high'
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: ETaskStatus;
  priority: ETaskPriority;
  createdAt: Date;
}
