import type { INavigationConfig } from '@/config/interfaces/INavigationConfig';

export const navigationConfig: INavigationConfig = {
  items: [
    {
      label: 'Участники',
      href: '/members',
    },
    {
      label: 'Информация',
      href: '/info',
    },
  ],
};
