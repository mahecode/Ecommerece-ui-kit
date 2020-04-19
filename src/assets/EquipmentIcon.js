import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function EquimentIcon(props) {
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
        d="M44 30.5H26V44h18V30.5z"
        stroke="#40BFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26 35.984l9 2.391 9-2.25M31.295 29.468V26H39.5v3.375M34.996 34.625h.011"
        stroke="#40BFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EquimentIcon;
