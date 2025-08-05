// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// config
import { HEADER_NAV_DATA } from 'components/layout/Header/config';

const HeaderDesktopNav: FC = () => (
  <nav className="header-desktop-nav">
    <ul className="header-desktop-list">
      {HEADER_NAV_DATA.map((item) => (
        <li key={item.title} className="header-desktop-item">
          <Link className="header-desktop-link" to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default HeaderDesktopNav;
