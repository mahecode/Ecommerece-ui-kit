import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MessageIcon(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5.25a1 1 0 011-1h18a1 1 0 011 1v13.5a1 1 0 01-1 1H3a1 1 0 01-1-1V5.25zm2 1v11.5h16V6.25H4z"
        fill={props.fillColor}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.24 4.6a1 1 0 011.41-.11L12 11.648l8.35-7.156a1 1 0 011.3 1.518l-9 7.714a1 1 0 01-1.3 0l-9-7.714a1 1 0 01-.11-1.41z"
        fill={props.fillColor}
      />
    </Svg>
  );
}

export default MessageIcon;
