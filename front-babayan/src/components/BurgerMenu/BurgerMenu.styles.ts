import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    buttonStyle: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
    [`@media (min-width: 1025px)`]: {
      buttonStyle: {
        display: 'none',
      },
    },
    [`@media (max-width: 768px)`]: {
      buttonStyle: {
        display: 'block',
      },
    },
  },
  { name: 'BurgerMenu' }
);
