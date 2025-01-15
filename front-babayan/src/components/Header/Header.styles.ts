import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    flex: {
      display: 'flex',
      marginBottom: 16,
      maxWidth: 1280,
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
      margin: [0, 'auto', 16],
    },
    buttonStyle: {
      background: 'none',
      outline: 'none',
      border: 'none',
    },
  },
  { name: 'Header' }
);
