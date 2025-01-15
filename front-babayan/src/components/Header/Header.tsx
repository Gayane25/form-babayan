import { useStyles } from './Header.styles';
import { SearchBar } from '../SearchBar';
import { NavBar } from '../NavBar';
import { Logo } from '../Logo';
import { BurgerMenu } from '../BurgerMenu';
import { useEffect, useState } from 'react';
import { dropdownOptions } from '../../utils/optionsData';

const Header = () => {
  const classes = useStyles();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isResponsive, setIsResponsive] = useState<boolean>(false);
  const maxPadQury = 1024;

  useEffect(() => {
    const handleResize = () => {
      if (window && window.innerWidth) {
        setIsResponsive(window.innerWidth <= maxPadQury);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [maxPadQury]);
  return (
    <div className={classes.root}>
      {isResponsive ? (
        <>
          <div className={classes.flex}>
            <BurgerMenu setIsOpenMenu={() => setIsOpenMenu(true)} />
            <Logo />
            <SearchBar />
          </div>
          {isOpenMenu && (
            <NavBar
              responsive={isResponsive}
              dropdownOptions={dropdownOptions}
              setIsOpenMenu={setIsOpenMenu}
            />
          )}
        </>
      ) : (
        <>
          <div className={classes.flex}>
            <Logo />
            <SearchBar />
          </div>
          <NavBar dropdownOptions={dropdownOptions} />
        </>
      )}
    </div>
  );
};

export default Header;
