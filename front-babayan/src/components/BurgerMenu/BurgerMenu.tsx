import { useStyles } from './BurgerMenu.styles';
import BurgerIcon from './BurgerIcon';
import { FC } from 'react';
interface BurgerMenuProps {
  setIsOpenMenu: () => void;
}
const BurgerMenu: FC<BurgerMenuProps> = ({ setIsOpenMenu }) => {
  const classes = useStyles();
  return (
    <button className={classes.buttonStyle} onClick={setIsOpenMenu}>
      <BurgerIcon />
    </button>
  );
};

export default BurgerMenu;
