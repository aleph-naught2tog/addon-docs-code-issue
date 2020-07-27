import * as React from 'react';

interface Props {
  /**
   * The text inside the button
   *
   * @default 'default text'
   */
  text?: string;
}

export const Button = (props: Props) => {
  const { text = 'default text' } = props;
  return (
    <button>{text}</button>
  );
}
