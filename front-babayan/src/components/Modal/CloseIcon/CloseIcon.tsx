import React from 'react';
import { ISvgProps } from '../../../utils/types/types';
const CloseIcon = ({
  fill = '#000000',
  width = '34',
  height = '24',
}: ISvgProps): React.ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        width="34"
        height="4"
        transform="rotate(45 3 0)"
        fill={fill}
      />
      <rect
        y="24.0416"
        width="34"
        height="4"
        transform="rotate(-45 0 24.0416)"
        fill={fill}
      />
    </svg>
  );
};

export default CloseIcon;
