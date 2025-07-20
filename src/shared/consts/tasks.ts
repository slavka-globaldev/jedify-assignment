import { ETaskPriority, ETaskStatus } from '@shared/types';

export const STATUS_OPTIONS: ETaskStatus[] = [ETaskStatus.Pending, ETaskStatus.Completed];
export const PRIORITY_OPTIONS: ETaskPriority[] = [ETaskPriority.Low, ETaskPriority.Medium, ETaskPriority.High];
