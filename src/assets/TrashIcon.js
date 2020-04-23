import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function TrashIcon(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M3 6.375h18M8.625 3h6.75M18.75 6.375H5.25V21h13.5V6.375z"
        stroke="#9098B1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default TrashIcon;
