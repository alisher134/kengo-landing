// libraries
import { Link, type LinkProps } from 'react-router-dom';
// types
import { ButtonSizes, ButtonVariants } from 'types/buttonTypes';

// external libraries
import clsx from 'clsx';

interface ButtonLinkProps extends LinkProps {
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

const ButtonLink = ({
  className, to, children, size = ButtonSizes.Sm, variant = ButtonVariants.Primary, ...props
}: ButtonLinkProps) => (
  <Link className={clsx('button', 'button-link', `button-${size}`, `button-${variant}`, className)} to={to} {...props}>
    {children}
  </Link>
);

export default ButtonLink;
