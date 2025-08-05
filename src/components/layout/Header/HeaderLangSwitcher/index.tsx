// libraries
import type { FC } from 'react';
// types
import { Languages } from 'components/layout/Header/types';

type HeaderLanguageSwitcherProps = {
  currentLanguage: Languages;
  onChangeLanguage:(language: Languages) => void;
  className?: string
};

const HeaderLanguageSwitcher: FC<HeaderLanguageSwitcherProps> = ({ currentLanguage, onChangeLanguage, className = '' }) => (
  <ul className={`language-switcher ${className}`}>
    <li className="language-item">
      <button
        className={`language-button ${currentLanguage === Languages.RU ? 'language-button-active' : ''}`}
        onClick={() => onChangeLanguage(Languages.RU)}
      >
        Ru
      </button>
    </li>
    <li className="language-item">
      <button
        className={`language-button ${currentLanguage === Languages.KZ ? 'language-button-active' : ''}`}
        onClick={() => onChangeLanguage(Languages.KZ)}
      >
        Kz
      </button>
    </li>
  </ul>
);

export default HeaderLanguageSwitcher;
