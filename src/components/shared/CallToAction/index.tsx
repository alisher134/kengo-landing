// libraries
import { type FC, memo } from 'react';
// components
import ButtonLink from 'components/shared/ButtonLink';
// constants
import { ROUTES } from 'constants/routes';
// types
import { ButtonSizes, ButtonVariants } from 'types/buttonTypes';

// external libraries
import clsx from 'clsx';

type CallToActionProps = {
  className?: string;
  variant?: ButtonVariants;
};

const CallToAction: FC<CallToActionProps> = ({ className = '', variant = ButtonVariants.Primary }) => (
  <div className={clsx('cta', className)}>
    <div className={clsx('cta-inner', `cta-inner-${variant}`)}>
      <div className="cta-wrap">
        <a className="cta-phone" href="tel:+7-705-957-7770">+7 705 957 77 70</a>
        <p className="cta-work-time">Ежедневно с 9:00 до 20:00</p>
        <ButtonLink className="cta-button" size={ButtonSizes.Sm} to={ROUTES.HOME.page} variant={variant}>За деньгами</ButtonLink>
      </div>
    </div>
  </div>
);

export default memo(CallToAction);
