import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    dropdown: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      maxWidth: 176,
      fontFamily: 'Roboto',
    },
    dropdownHeader: {
      backgroundColor: '#fff',
      padding: '10px',
      cursor: 'pointer',
      display: 'flex',
      // border: '1px solid #969696',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '16px',
      fontWeight: 500,
    },
    arrow: {
      border: 'solid #333',
      borderWidth: '0 2px 2px 0',
      padding: 2,
      margin: 6,
      transform: 'rotate(45deg)',
      transition: 'transform 0.3s ease',
    },
    arrowOpen: {
      transform: 'rotate(-135deg)',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '100%',
      minWidth: 175,
      left: 0,
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      marginTop: '5px',
    },
    dropdownItem: {
      padding: '10px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'background-color 0.3s ease',
    },
    dropdownItemHover: {
      backgroundColor: '#f1f1f1',
    },
    nestedDropdown: {
      position: 'relative',
    },
    nestedMenu: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 150,
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
      zIndex: 1001,
      display: 'none',
    },
    nestedMenuVisible: {
      display: 'block',
    },
    dropdownHeaderOnSmallScreen: {
      justifyContent: 'flex-start',
      fontSize: 24,
      borderBottom: '1px solid #E9E9E9',
      width: '100%',
    },
    dropdownOnSmallScreen: {
      flexDirection: 'column',
      maxWidth: '100%',
    },
    dropdownMenuOnSmallScreen: {
      position: 'relative',
      border: 'none',
      zIndex: 0,
      boxShadow: 'none',
      paddingLeft: 5,
      minWidth: '100%',
    },

    [`@media (max-width: 1024px)`]: {
      dropdownHeader: {
        justifyContent: 'flex-start',
        fontSize: 24,
        borderBottom: '1px solid #E9E9E9',
        width: '100%',
      },
      dropdown: {
        flexDirection: 'column',
        maxWidth: '100%',
      },
      dropdownMenu: {
        position: 'relative',
        border: 'none',
        zIndex: 0,
        boxShadow: 'none',
        paddingLeft: 5,
        minWidth: '100%',
      },
    },
  },
  { name: 'Dropdown' }
);
