import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      maxWidth: 360,
      maxHeight: 459,
      margin: '0.5rem',
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 calc(33.3% - 16px)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      textAlign: 'center',

      '&:hover': {
        opacity: 0.6,
        cursor: 'pointer',
      },
    },
    imgContent: {
      width: '100%',
      '& img': {
        width: '100%',
        height: '100%',
      },
    },
    infoContent: {
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      gap: 5,
      '& ul': {
        display: 'flex',
        gap: '1.6rem',
      },
    },
    title: {
      fontWeight: 700,
      fontSize: '1rem',
    },
    redText: {
      fontWeight: 700,
      fontSize: '0.8125rem',
      color: '#EB0028',
    },
    flex: {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
    },
    greyText: {
      fontWeight: 400,
      fontSize: '0.875rem',
      color: '#929292',
    },
    author: {
      fontWeight: 500,
      fontSize: ' 0.75rem',
    },

    [`@media (min-width: 481px) and (max-width: 768px)`]: {
      root: {
        flex: '1 1 calc(50% - 16px)',
      },
    },
    [`@media (max-width: 350px)`]: {
      root: {
        flex: '1 1 100%',
      },
    },
  },
  { name: 'ArticleCard' }
);
