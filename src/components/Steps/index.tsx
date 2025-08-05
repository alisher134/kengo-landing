// libraries
import type { FC } from 'react';
// components
import StepCard from 'components/Steps/StepCard';
// config
import { STEPS_DATA } from 'components/Steps/config';

const Steps: FC = () => (
  <div className="steps">
    <div className="steps-inner">
      {STEPS_DATA.map((step) => (
        <StepCard key={step.id} description={step.description} id={step.id} position={step.position} title={step.title} />
      ))}
    </div>
  </div>
);

export default Steps;
