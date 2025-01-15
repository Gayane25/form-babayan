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
  },
  { name: 'Logo' }
);
