import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide text for the button */

  children: ReactNode;
  /** Select a variant */

  variant: 'primary' | 'secondary';
}

export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor:
          variant === 'primary' ? 'rgba(245,194,68,255)' : 'skyblue',
        color: 'black',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: 10,
        padding: 20,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
