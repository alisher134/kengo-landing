// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// config
import { FOOTER_NAV_LINKS } from 'components/layout/Footer/FooterNav/config';

const FooterNav: FC = () => (
  <nav className="footer-nav">
    <ul className="footer-list">
      {FOOTER_NAV_LINKS.map((item) => (
        <li key={item.title}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default FooterNav;
