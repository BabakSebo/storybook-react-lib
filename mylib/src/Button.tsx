import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

const ThemedButton = styled('button')(
  {
    color: 'black',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: 10,
    padding: 20,
    cursor: 'pointer',
  },
  variant({
    variants: {
      primary: {
        bg: 'rgba(245, 194, 68, 255)',
      },
      secondary: {
        color: 'white',
        bg: 'skyblue',
      },
    },
  })
);

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide text for the button */

  children: ReactNode;
  /** Select a variant */

  variant: 'primary' | 'secondary';
}

export const Button = ({ children, ...props }: Props) => {
  return <ThemedButton {...props}>{children}</ThemedButton>;
};

// style={{
//     backgroundColor:
//       variant === 'primary' ? 'rgba(245,194,68,255)' : 'skyblue',
//     color: 'black',
//     fontWeight: 'bold',
//     border: 'none',
//     borderRadius: 10,
//     padding: 20,
//     cursor: 'pointer',
//   }}

// const backgroundColor = theme.variants('mode', 'variant', {
//     primary: { light: 'rgba(245,194,68,255)', dark: 'rgba(245,194,68,255)' },
//     secondary: { light: 'skyblue', dark: 'skyblue' },
//   });

//   const ThemeButton = styled.button`
//     color: black;
//     background-color: ${backgroundColor};
//     font-weight: bold;
//     border: none;
//     border-radius: 10px;
//     padding: 20px;
//     cursor: pointer;
//   `;
