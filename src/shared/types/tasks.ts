export type TTaskStatus = 'pending' | 'completed';
export type TTaskPriority = 'low' | 'medium' | 'high';

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TTaskStatus;
  priority: TTaskPriority;
  createdAt: Date;
}
