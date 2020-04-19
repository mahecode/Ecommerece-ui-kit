import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LockIcon(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.75a1 1 0 011-1h18a1 1 0 011 1V19a1 1 0 01-1 1H1a1 1 0 01-1-1V7.75zm2 1V18h16V8.75H2z"
        fill={props.fillColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C7.481 2 5.375 4.132 5.375 6.841a1 1 0 01-2 0C3.375 3.099 6.306 0 10 0s6.625 3.1 6.625 6.841a1 1 0 11-2 0C14.625 4.132 12.519 2 10 2zM10 11.726a1 1 0 011 1v1.125a1 1 0 11-2 0v-1.125a1 1 0 011-1z"
        fill={props.fillColor}
      />
    </Svg>
  );
}

export default LockIcon;
