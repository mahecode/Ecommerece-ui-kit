import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function FbIcon(props) {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d="M18 2.5h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 011-1h3v-4z"
        fill="#4092FF"
      />
    </Svg>
  );
}

export default FbIcon;
