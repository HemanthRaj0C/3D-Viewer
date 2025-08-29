import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'accent' | 'secondary' | 'warning' | 'surface';
  fullWidth?: boolean;
}

const variantClass: Record<NonNullable<ButtonProps['variant']>, string> = {
  accent: 'btn-brutal',
  secondary: 'btn-brutal btn-secondary',
  warning: 'btn-brutal btn-warning',
  surface: 'btn-brutal btn-surface',
};

export const Button: React.FC<ButtonProps> = ({ variant = 'accent', fullWidth, className, children, ...rest }) => {
  return (
    <button
      className={clsx(variantClass[variant], fullWidth && 'w-full', className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
