import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function ShirtLogo(props) {
  return (
    <Svg width={70} height={70} viewBox="0 0 70 70" fill="none" {...props}>
      <Rect
        x={0.5}
        y={0.5}
        width={69}
        height={69}
        rx={34.5}
        fill={props.color}
        stroke="#EBF0FF"
      />
      <Path
        d="M31.625 26h6.75L35 31.625 31.625 26zM38.375 26l2.25 2.25-2.25 6.75L35 31.625"
        stroke="#40BFFF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M29.375 28.25L26 29.375V44h18V29.375l-3.375-1.125"
        stroke="#40BFFF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M35 44V31.625L31.625 35l-2.25-6.75 2.25-2.25"
        stroke="#40BFFF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ShirtLogo;
