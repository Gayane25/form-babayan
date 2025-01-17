import { FC, useEffect, useRef, useState } from 'react';
import { useStyles } from './Dropdown.styles';
import { IDropdownOpt } from '../../utils/types/types';
interface DropdownProps {
  displayName: string;
  nestedOpt: IDropdownOpt[];
}
const Dropdown: FC<DropdownProps> = ({ displayName, nestedOpt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (event: MouseEvent) => {
    if (nestedOpt.length > 0 && event.target instanceof HTMLElement) {
      event.stopPropagation();
    }
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes.dropdown} onClick={toggleDropdown} ref={menuRef}>
      <div className={classes.dropdownHeader}>
        {displayName}
        <span
          className={
            nestedOpt && nestedOpt.length > 0
              ? `${classes.arrow} ${isOpen ? classes.arrowOpen : ''}`
              : ''
          }
        ></span>
      </div>
      {isOpen && nestedOpt && nestedOpt.length > 0 && (
        <div className={classes.dropdownMenu}>
          {nestedOpt.map((option) => (
            <Dropdown
              key={option.displayName}
              displayName={option.displayName}
              nestedOpt={option.nestedOpt}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
