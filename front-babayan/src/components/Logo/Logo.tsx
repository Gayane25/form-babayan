import LogoIcon from './LogoIcon';
import { useStyles } from './Logos.styles';

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LogoIcon />
    </div>
  );
};

export default Logo;
