import { faker } from '@faker-js/faker';

import type { ITask, TTaskPriority, TTaskStatus } from '@shared/types';

export const getRandomTask = (): ITask => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence({ min: 3, max: 8 }),
  description: faker.lorem.paragraph(),
  status: faker.helpers.arrayElement<TTaskStatus>(['pending', 'completed']),
  priority: faker.helpers.arrayElement<TTaskPriority>(['low', 'medium', 'high']),
  createdAt: faker.date.recent()
});

export const mockedTasks: ITask[] = Array.from({ length: 8 }, getRandomTask);
