import * as React from 'react';

import { Button } from '../Button';

import mdx from '../button.mdx';

// // The below will fail.
// const boop = {
//   title: 'Button',
//   component: Button,
//   parameters: {
//     docs: {
//       page: mdx,
//     },
//   },
// };

// export default boop;

// This works fine.
export default {
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const BasicButton = () => {
  return (
    <Button text='hello world' />
  );
}
