import { faker } from '@faker-js/faker';

import { ROLES_OPTIONS } from '@shared/consts';
import type { EUserRole } from '@shared/types';
import type { IProfile } from '@shared/types';

export const getRandomProfileInfo = (): IProfile => ({
  fullName: faker.person.fullName(),
  email: faker.internet.email(),
  roles: faker.helpers.arrayElement<EUserRole>(ROLES_OPTIONS),
  enabledEmailNotifications: faker.datatype.boolean()
});
