import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LineBreakSeparator(props) {
  return (
    <Svg width={311} height={1} viewBox="0 0 311 1" fill="none" {...props}>
      <Path stroke="#EBF0FF" strokeDasharray="5 5" d="M0 .5h311" />
    </Svg>
  );
}

export default LineBreakSeparator;
