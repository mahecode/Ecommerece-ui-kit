import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BottomSearchIcon(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M8.875 16.75a7.875 7.875 0 100-15.75 7.875 7.875 0 000 15.75z"
        stroke={props.color}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M14.5 14.5L19 19"
        stroke={props.color}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default BottomSearchIcon;
