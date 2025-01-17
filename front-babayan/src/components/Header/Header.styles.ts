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
      margin: [0, 'auto', 16],
      justifyContent: 'flex-end',
      paddingRight: 50,
    },
    buttonStyle: {
      background: 'none',
      outline: 'none',
      border: 'none',
    },
    [`@media (max-width: 1024px)`]: {
      flex: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: [0, 5, 8],
        justifyContent: 'space-between',
      },
      root: {
        padding: '0 10px',
      },
    },
  },
  { name: 'Header' }
);
