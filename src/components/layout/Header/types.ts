// types
import type { NavLinkItem } from 'types/navTypes';

export type HeaderNavLink = {
  title: string;
  path: string;
  items?: NavLinkItem[]
};

export enum Languages {
  RU = 'RU',
  KZ = 'KZ',
}
