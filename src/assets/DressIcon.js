import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function DressIcon(props) {
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
        d="M37.25 29.375l1.125 3.375-1.125 3.375 6.75 6.75S41.75 44 35 44s-9-1.125-9-1.125l6.75-6.75-1.125-3.375 1.125-3.375h4.5zM36.125 29.375H39.5L40.625 26H37.25l-1.125 3.375zM29.375 26h3.375l1.125 3.375H30.5L29.375 26zM32.75 36.125h4.5"
        stroke="#40BFFF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default DressIcon;
