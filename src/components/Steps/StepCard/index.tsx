// libraries
import type { FC } from 'react';
// types
import type { Step } from 'components/Steps/types';

// external libraries
import clsx from 'clsx';

type StepCardProps = Step & {
  className?: string;
};

const StepCard: FC<StepCardProps> = ({
  position, title, description, className = '',
}) => (
  <div className={clsx('step-card', className)}>
    <p className="step-card-position">{position}</p>
    <h2 className="step-card-title">{title}</h2>
    <p className="step-card-description">{description}</p>
  </div>
);

export default StepCard;
