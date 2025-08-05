// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// components
import HeaderLanguageSwitcher from 'components/layout/Header/HeaderLangSwitcher';
import HeaderMobileNav from 'components/layout/Header/HeaderMobileNav';
import CallToAction from 'components/shared/CallToAction';
// constants
import { ROUTES } from 'constants/routes';
// assets
import CloseIcon from 'assets/icons/close_icon.svg?react';
import KengoLogo from 'assets/icons/kengo_icon.svg?react';
// types
import type { Languages } from 'components/layout/Header/types';

type HeaderDropdownProps = {
  isMenuOpen: boolean;
  toggleBurgerMenu: () => void;
  currentLanguage: Languages;
  onChangeLanguage: (language: Languages) => void
};

const HeaderDropdown: FC<HeaderDropdownProps> = ({
  isMenuOpen, currentLanguage, onChangeLanguage, toggleBurgerMenu,
}) => (
  <div className={`header-dropdown ${isMenuOpen ? 'header-dropdown-active' : ''}`}>
    <div className="header-dropdown-wrap">
      <div className="container">
        <div className="header-dropdown-top">
          <button className="header-burger" onClick={toggleBurgerMenu}>
            <CloseIcon />
          </button>

          <Link className="header-logo" to={ROUTES.HOME.page}>
            <KengoLogo />
          </Link>

          <button className="login-button" type="button">Войти</button>
        </div>

        <HeaderLanguageSwitcher className="lang-mobile" currentLanguage={currentLanguage} onChangeLanguage={onChangeLanguage} />

        <HeaderMobileNav />

        <CallToAction className="header-dropdown-cta" />
      </div>
    </div>
  </div>
);

export default HeaderDropdown;
