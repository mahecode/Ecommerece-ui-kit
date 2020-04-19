import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LocationIcon(props) {
  return (
    <Svg width={17} height={22} viewBox="0 0 17 22" fill="none" {...props}>
      <Path
        d="M16 8.777C16 13.075 8.5 21 8.5 21S1 13.074 1 8.777C1 4.481 4.357 1 8.5 1S16 4.482 16 8.777z"
        stroke="#40BFFF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 8.5a2 2 0 11-4 0 2 2 0 014 0z"
        fill="#40BFFF"
        stroke="#40BFFF"
      />
    </Svg>
  );
}

export default LocationIcon;
