// libraries
import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';
// config
import { HEADER_NAV_DATA } from 'components/layout/Header/config';
// assets
import LeftArrowIcon from 'assets/icons/left_arrow_icon.svg?react';
// types
import { type HeaderNavLink } from 'components/layout/Header/types';

const HeaderMobileNav: FC = () => {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  const handleToggleMenu = (title: string) => {
    setActiveTitle((prev) => (prev === title ? null : title));
  };

  const isMenuOpen = (title: string) => activeTitle === title;

  const renderSubMenu = (menu: HeaderNavLink) => (
    <ul className="header-mobile-submenu-list">
      {menu.items?.map((sub) => (
        <li key={sub.title} className="header-mobile-submenu">
          <Link to={sub.path}>{sub.title}</Link>
        </li>
      ))}
    </ul>
  );

  const renderMenuWithDropdown = (menu: HeaderNavLink) => (
    <>
      <button
        className={`header-mobile-button ${isMenuOpen(menu.title) ? 'header-mobile-button-active' : ''}`}
        onClick={() => handleToggleMenu(menu.title)}
        type="button"
      >
        {menu.title}

        <LeftArrowIcon className={isMenuOpen(menu.title) ? 'header-mobile-icon-rotated' : 'header-mobile-icon'} />
      </button>
      {isMenuOpen(menu.title) && (
        renderSubMenu(menu)
      )}
    </>
  );

  return (
    <nav className="header-mobile-nav">
      <ul className="header-mobile-list">
        {HEADER_NAV_DATA.map((menu) => (
          <li key={menu.title} className="header-mobile-item">
            {menu.items?.length ? (
              renderMenuWithDropdown(menu)
            ) : <Link className="header-mobile-link" to={menu.path}>{menu.title}</Link>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMobileNav;
