// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// constants
import { ROUTES } from 'constants/routes';
// assets
import ArrowIcon from 'assets/icons/arrow_icon.svg?react';
import newImage from 'assets/images/new.png';
import promoImage from 'assets/images/promo.png';

const Promo: FC = () => (
  <div className="promo">
    <div className="promo-inner">
      <h2 className="promo-title">
        Хочешь
        <span> скидку?</span>
      </h2>

      <div className="promo-images">
        <img alt="promo" className="promo-image" src={promoImage} />
        <img alt="new" className="promo-image" src={newImage} />
      </div>

      <Link className="promo-link" to={ROUTES.HOME.page}>
        <span className="promo-icon"><ArrowIcon /></span>
        Условия Акции
      </Link>
    </div>
  </div>
);

export default Promo;
