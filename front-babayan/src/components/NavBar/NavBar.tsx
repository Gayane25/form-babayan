import { Dropdown } from '../Dropdown';
import { useStyles } from './NavBar.styles';
import { CloseIcon } from '../Modal/CloseIcon';
import LogoIcon from '../Logo/LogoIcon';
import { IDropdownOpt } from '../../utils/types/types';
import clsx from 'clsx';

interface NavBarProps {
  setIsOpenMenu?: (isOpenMenu: boolean) => void;
  dropdownOptions: IDropdownOpt[];
  responsive?: boolean;
  logo?: React.ReactNode;
  closable?: boolean;
}
const NavBar: React.FC<NavBarProps> = ({
  dropdownOptions,
  responsive,
  setIsOpenMenu,
}) => {
  const classes = useStyles();

  const responsiveHeader = (
    <>
      <LogoIcon width="150px" />
      <button
        className={classes.buttonStyle}
        onClick={() => setIsOpenMenu && setIsOpenMenu(false)}
      >
        <CloseIcon width="27px" />
      </button>
    </>
  );
  return (
    <div className={responsive ? classes.layover : ''}>
      <div
        className={clsx(classes.root, { [classes.onSmallScreen]: responsive })}
      >
        <div
          className={clsx(classes.flex, {
            [classes.flexOnSmallScreen]: responsive,
          })}
        >
          {responsiveHeader}
        </div>

        {dropdownOptions &&
          dropdownOptions.length &&
          dropdownOptions.map((dropdown) => (
            <div
              key={dropdown.displayName}
              className={clsx(classes.dropdownSize, {
                [classes.dropdownSizeOnSmallScreen]: responsive,
              })}
            >
              <Dropdown
                displayName={dropdown.displayName}
                nestedOpt={dropdown.nestedOpt}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NavBar;
