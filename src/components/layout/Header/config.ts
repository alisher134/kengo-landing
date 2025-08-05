// constants
import { ROUTES } from 'constants/routes';
// types
import type { HeaderNavLink } from 'components/layout/Header/types';
import type { NavLinkItem } from 'types/navTypes';

const HEADER_NAV_ITEMS: NavLinkItem[] = [
  {
    title: 'На карту',
    path: ROUTES.HOME.page,
  },
  {
    title: 'По IBAN',
    path: ROUTES.HOME.page,
  },
  {
    title: 'Как узнать свой IBAN',
    path: ROUTES.HOME.page,
  },
];

export const HEADER_NAV_DATA: HeaderNavLink[] = [
  {
    title: 'Как погасить',
    path: ROUTES.HOME.page,
    items: HEADER_NAV_ITEMS,
  },
  {
    title: 'Как получить',
    path: ROUTES.HOME.page,
    items: HEADER_NAV_ITEMS,
  },
  { title: 'Вопрос-Ответ', path: ROUTES.HOME.page },
  { title: 'О нас', path: ROUTES.HOME.page },
] as const;
