import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BagIcon(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M19 4.177H1V19h18V4.177zM19 4.177H1L3.117 1h13.766L19 4.177zM12.383 8.677a2.382 2.382 0 01-4.763 0"
        stroke="#40BFFF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BagIcon;
