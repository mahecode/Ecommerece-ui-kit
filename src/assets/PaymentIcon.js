import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PaymentIcon(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M21 5.25H3v13.5h18V5.25zM3 9.75h18"
        stroke="#40BFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PaymentIcon;
