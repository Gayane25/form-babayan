import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      justifyContent: 'center',
      paddingTop: 27,
      maxWidth: 1280,
      margin: [0, 'auto'],
      flex: 1,
      overflowY: 'auto',
    },
    modalContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      '& p': {
        maxWidth: 500,
      },
    },
    selectedImg: {
      width: '100%',
      height: '100%',
      '& img': {
        width: '100%',
      },
    },
  },
  { name: 'ArticlesContainer' }
);
