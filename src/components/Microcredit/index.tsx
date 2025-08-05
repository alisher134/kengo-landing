// libraries
import type { FC } from 'react';
// components
import MicrocreditCalculator from 'components/Microcredit/MicrocreditCalculator';
// assets
import creditImage from 'assets/images/creditImage.png';

const Microcredit: FC = () => (
  <div className="microcredit home">
    <div className="microcredit-inner">
      <div className="microcredit-info">
        <h2 className="microcredit-title">
          Сумма
          <br />
          микрокредита
        </h2>
        <MicrocreditCalculator />
      </div>
      <img alt="cart with money" className="microcredit-img" src={creditImage} />
    </div>
  </div>
);

export default Microcredit;
