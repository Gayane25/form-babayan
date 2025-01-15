import { FC } from 'react';
import { useStyles } from './Modal.styles';
import { CloseIcon } from './CloseIcon';
interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}
const Modal: FC<ModalProps> = ({ onClose, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.modalOverlay} onClick={onClose}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className={classes.closeButton}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
