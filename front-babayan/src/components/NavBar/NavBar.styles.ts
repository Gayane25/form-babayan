import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      position: 'relative',
      padding: [5, 0],
      margin: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        border: '1px solid #E9E9E9',
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        border: '1px solid #E9E9E9',
      },
    },
    dropdownSize: {
      maxWidth: 130,
    },
    buttonStyle: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
    flex: {
      display: 'none',
    },
    onSmallScreen: {
      maxWidth: 350,
      height: '100vh',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      background: '#FFFFFF',
      position: 'fixed',
      top: 0,
      left: 0,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      borderBottom: '1px solid #E9E9E9',
      paddingTop: 60,
    },
    flexOnSmallScreen: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 50,
      padding: 5,
      borderBottom: '1px solid #E9E9E9',
    },
    dropdownSizeOnSmallScreen: {
      maxWidth: '100%',
    },
    layover: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
  },
  { name: 'NavBar' }
);
