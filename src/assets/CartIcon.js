import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CartIcon(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9.188 21a.562.562 0 100-1.125.562.562 0 000 1.125zM17.063 21a.562.562 0 100-1.125.562.562 0 000 1.125z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 3h2.25L7.5 16.5h11.25L21 6.375H6.375"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CartIcon;
