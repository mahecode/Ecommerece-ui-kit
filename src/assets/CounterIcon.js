import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CounterIcon(props) {
  return (
    <Svg width={106} height={26} viewBox="0 0 106 26" fill="none" {...props}>
      <Path d="M1 6a5 5 0 015-5h27v24H6a5 5 0 01-5-5V6z" stroke="#EBF0FF" />
      <Path fill="#EBF0FF" stroke="#EBF0FF" d="M33 1h40v24H33z" />
      <Path d="M73 1h27a5 5 0 015 5v14a5 5 0 01-5 5H73V1z" stroke="#EBF0FF" />
      <Path
        opacity={0.5}
        d="M51.534 9.32v-.996h2.256V17h-1.104V9.32h-1.152z"
        fill="#223263"
      />
      <Path
        d="M89 8.333v9.334M84.333 13h9.334M12.333 13h9.334"
        stroke="#9098B1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CounterIcon;
