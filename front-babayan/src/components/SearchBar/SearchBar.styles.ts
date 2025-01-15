import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    buttonStyle: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
    inputContainer: {
      width: '100%',
      maxWidth: 400,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    inputContent: {
      width: '100%',
      padding: [9, 7],
      fontSize: '1rem',
      fontWeight: 400,
      color: '#333',
      border: '2px solid #ddd',
      borderRadius: 8,
      outline: 'none',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'border-color 0.3s, box-shadow 0.3s',
    },
    opacity: {
      opacity: '0',
    },
  },
  { name: 'SearchBar' }
);
