import React from 'react';
import clsx from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padded?: boolean;
}

export const Card: React.FC<CardProps> = ({ hover = true, padded = true, className, children, ...rest }) => {
  return (
    <div
      className={clsx(
        'brutal-card brutal-border brutal-shadow',
        hover && 'brutal-shadow-hover',
        padded ? 'p-6' : 'p-0',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
