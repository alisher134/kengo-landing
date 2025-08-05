// libraries
import type { FC } from 'react';
// components
import ButtonLink from 'components/shared/ButtonLink';
// constants
import { ROUTES } from 'constants/routes';
// assets
import creditImage from 'assets/images/creditImage.png';
// types
import { ButtonSizes } from 'types/buttonTypes';

const NotFoundPage: FC = () => (
  <section className="not-found">
    <div className="not-found-inner">
      <div className="not-found-info">
        <p className="not-found-description">Упс, произошла ошибка</p>
        <h2 className="not-found-title">404</h2>
        <ButtonLink className="not-found-button" size={ButtonSizes.Md} to={ROUTES.HOME.page}>Перейти на главную</ButtonLink>
      </div>

      <img alt="cart with money" className="not-found-img" src={creditImage} />
    </div>
  </section>
);

export default NotFoundPage;
