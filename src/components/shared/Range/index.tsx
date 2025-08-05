// libraries
import {
  type ChangeEvent, type FC, useCallback, useEffect, useRef,
} from 'react';
// constants
import { PERCENTAGE } from 'constants/common';

type RangeProps = {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  step?: number;
};

const Range: FC<RangeProps> = ({
  max, min, value, step, onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const updateBackground = useCallback((currentValue: number) => {
    if (!inputRef.current) {
      return;
    }

    const percent = ((currentValue - min) / (max - min)) * PERCENTAGE;

    inputRef.current.style.setProperty('--range-percent', `${percent}%`);
  }, [min, max]);

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    if (!inputRef.current) {
      return;
    }

    const newValue = Number(e.target.value);

    onChange(newValue);
    updateBackground(newValue);
  };

  useEffect(() => {
    updateBackground(value);
  }, [updateBackground, value]);

  return (
    <div className="range-wrapper">
      <input
        ref={inputRef}
        className="range"
        max={max}
        min={min}
        onChange={handleChange}
        step={step}
        type="range"
        value={value}
      />
    </div>
  );
};

export default Range;
