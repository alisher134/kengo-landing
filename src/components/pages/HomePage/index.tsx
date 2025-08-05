// libraries
import type { FC } from 'react';
// components
import LatestNews from 'components/LatestNews';
import Microcredit from 'components/Microcredit';
import Promo from 'components/Promo';
import CallToAction from 'components/shared/CallToAction';
import Steps from 'components/Steps';

const HomePage: FC = () => (
  <section>
    <Microcredit />
    <Promo />
    <Steps />
    <CallToAction />
    <LatestNews />
  </section>
);

export default HomePage;
