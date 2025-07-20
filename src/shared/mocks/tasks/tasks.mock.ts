import { faker } from '@faker-js/faker';

import { PRIORITY_OPTIONS, STATUS_OPTIONS } from '@shared/consts';
import type { ETaskPriority, ETaskStatus, ITask } from '@shared/types';

export const getRandomTask = (): ITask => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence({ min: 3, max: 8 }),
  description: faker.lorem.paragraph(),
  status: faker.helpers.arrayElement<ETaskStatus>(STATUS_OPTIONS),
  priority: faker.helpers.arrayElement<ETaskPriority>(PRIORITY_OPTIONS),
  createdAt: faker.date.recent()
});

export const mockedTasks: ITask[] = Array.from({ length: 8 }, getRandomTask);
