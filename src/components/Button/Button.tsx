import React, { FC, HTMLAttributes, ReactChild } from 'react';

import styles from './button.module.css';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** JSX to render inside Button */
  children?: ReactChild;
}

console.log('styles', styles);

export const Button: FC<Props> = (props) => {
  const { onClick, children } = props;
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
