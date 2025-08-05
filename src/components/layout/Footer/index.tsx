// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// components
import FooterNav from 'components/layout/Footer/FooterNav';
// constants
import { ROUTES } from 'constants/routes';
// assets
import InstagramIcon from 'assets/icons/instagram_icon.svg?react';
import KengoLogo from 'assets/icons/kengo_icon.svg?react';

const Footer: FC = () => (
  <footer className="footer">
    <div className="footer-info">
      <Link className="footer-logo" to={ROUTES.HOME.page}>
        <KengoLogo />
      </Link>

      <FooterNav />

      <a className="brand-email" href="mailto:support@kengo.kz">support@kengo.kz</a>
      <a className="instagram-icon" href="https://instagram.com">
        <InstagramIcon />
      </a>
    </div>

    <div className="footer-bottom">
      <p className="legal-text">
        {`ТОО «МФО «Бизнес займ», Лицензия на осуществление микрофинансовой деятельности № 02.24.0010.М от 26.08.2024 года, 
            выдана Управлением региональных представителей в городе Алматы Агентства Республики Казахстан 
            по регулированию и развитию 
            финансового рынка.`}
      </p>
    </div>
  </footer>
);

export default Footer;
