// libraries
import type { ButtonHTMLAttributes, FC } from 'react';
// types
import { ButtonSizes, ButtonVariants } from 'types/buttonTypes';

// external libraries
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

const Button: FC<ButtonProps> = ({
  children, className = '', variant = ButtonVariants.Primary, size = ButtonSizes.Sm, ...props
}) => (
  <button className={clsx('button', `button-${size}`, `button-${variant}`, className)} {...props}>
    {children}
  </button>
);

export default Button;
