import React from 'react';
import clsx from 'clsx';

export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={clsx('max-w-6xl mx-auto px-4', className)} {...rest} />
);

export default Container;
