import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function OfferIcon(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M8.063 8.625a.563.563 0 100-1.125.563.563 0 000 1.125z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 13l-8 8L3 11V3h8l10 10z"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default OfferIcon;
