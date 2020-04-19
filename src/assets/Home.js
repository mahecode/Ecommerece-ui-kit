import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Home(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M3 9.75L12 3l9 6.75M21 9.75V21H3V9.75"
        stroke={props.color}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.25 14.25h-4.5V21h4.5v-6.75z"
        stroke={props.color}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Home;
