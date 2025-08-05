// constants
import { ROUTES } from 'constants/routes';
// types
import type { NavLinkItem } from 'types/navTypes';

export const FOOTER_NAV_LINKS: NavLinkItem[] = [
  { title: 'Как погасить', path: ROUTES.HOME.page },
  { title: 'Как получить', path: ROUTES.HOME.page },
  { title: 'Документы', path: ROUTES.DOCUMENTS.page },
  { title: 'Вопрос-Ответ', path: ROUTES.HOME.page },
  { title: 'Безопасность', path: ROUTES.HOME.page },
] as const;
