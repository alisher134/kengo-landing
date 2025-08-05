// libraries
import {
  type FC, useState,
} from 'react';
// components
import ButtonLink from 'components/shared/ButtonLink';
import Range from 'components/shared/Range';
// constants
import { ROUTES } from 'constants/routes';
// config
import {
  MICRO_CREDIT_DEBOUNCE_TIME, MICRO_CREDIT_DEFAULT, MICRO_CREDIT_MAX, MICRO_CREDIT_MIN,
} from 'components/Microcredit/MicrocreditCalculator/config';
// helpers
import { formatCurrency } from 'helpers/formatCurrency';
// types
import { ButtonSizes } from 'types/buttonTypes';

// external libraries
import { useDebounce } from 'use-debounce';

const MicrocreditCalculator: FC = () => {
  const [value, setValue] = useState<number>(MICRO_CREDIT_DEFAULT);

  const [debouncedValue] = useDebounce(value, MICRO_CREDIT_DEBOUNCE_TIME);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="microcredit-calculator">
      <div>
        <Range
          max={MICRO_CREDIT_MAX}
          min={MICRO_CREDIT_MIN}
          onChange={handleChange}
          value={value}
        />
        <div className="labels">
          <span>
            {formatCurrency(MICRO_CREDIT_MIN)}
          </span>
          <span>
            {formatCurrency(MICRO_CREDIT_MAX)}
          </span>
        </div>
      </div>
      <ButtonLink
        className="microcredit-button"
        size={ButtonSizes.Md}
        to={ROUTES.HOME.page}
      >
        <span>Получить</span>
        {' '}
        {formatCurrency(debouncedValue)}
      </ButtonLink>
    </div>
  );
};

export default MicrocreditCalculator;
