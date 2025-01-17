import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      flexGrow: 1,
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      marginLeft: 150,
    },
    [`@media (max-width: 1024px)`]: {
      root: {
        margin: 0,
        flexGrow: 'unset',
        marginLeft: 0,
        justifyContent: 'none',
      },
    },
  },
  { name: 'Logo' }
);
