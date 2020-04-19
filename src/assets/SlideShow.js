import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

function SlideShow(props) {
  return (
    <Svg width={72} height={8} viewBox="0 0 72 8" fill="none" {...props}>
      <Circle cx={4} cy={4} r={4} fill="#EBF0FF" />
      <Circle cx={20} cy={4} r={4} fill="#EBF0FF" />
      <Circle cx={36} cy={4} r={4} fill="#40BFFF" />
      <Circle cx={52} cy={4} r={4} fill="#EBF0FF" />
      <Circle cx={68} cy={4} r={4} fill="#EBF0FF" />
    </Svg>
  );
}

export default SlideShow;
