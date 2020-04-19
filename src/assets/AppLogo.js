import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={72} height={72} viewBox="0 0 72 72" fill="none" {...props}>
      <Rect width={72} height={72} rx={16} fill="#40BFFF" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.828 33.172a4 4 0 010 5.656l-12 12a4 4 0 01-5.656 0l-12-12a4 4 0 010-5.656l12-12a4 4 0 015.656 0l12 12zM36 29.657L29.657 36 36 42.343 42.343 36 36 29.657z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
