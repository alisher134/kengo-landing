// libraries
import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';
// components
import HeaderDesktopNav from 'components/layout/Header/HeaderDesktopNav';
import HeaderDropdown from 'components/layout/Header/HeaderDropdown';
import HeaderLanguageSwitcher from 'components/layout/Header/HeaderLangSwitcher';
// constants
import { ROUTES } from 'constants/routes';
// assets
import BurgerIcon from 'assets/icons/burger_icon.svg?react';
import KengoLogo from 'assets/icons/kengo_icon.svg?react';
// types
import { Languages } from 'components/layout/Header/types';

const Header: FC = () => {
  const [language, setLanguage] = useState<Languages>(Languages.KZ);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleBurgerMenu = () => {
    setIsMenuOpen((prev) => {
      const nextValue = !prev;

      document.body.style.overflow = nextValue ? 'hidden' : 'auto';

      return nextValue;
    });
  };

  return (
    <header className="header">
      <div className="header-head">
        <button className="header-burger" onClick={toggleBurgerMenu}>
          <BurgerIcon />
        </button>

        <Link className="header-logo" to={ROUTES.HOME.page}>
          <KengoLogo />
        </Link>

        <HeaderDesktopNav />

        <div className="header-controls">
          <HeaderLanguageSwitcher className="lang-desktop" currentLanguage={language} onChangeLanguage={setLanguage} />
          <Link className="login-button" to={ROUTES.AUTH.LOGIN.page}>Войти</Link>
        </div>
      </div>

      { isMenuOpen && (
      <HeaderDropdown
        currentLanguage={language}
        isMenuOpen={isMenuOpen}
        onChangeLanguage={setLanguage}
        toggleBurgerMenu={toggleBurgerMenu}
      />
      )}
    </header>
  );
};

export default Header;
