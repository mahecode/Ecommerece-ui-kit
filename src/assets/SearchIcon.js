import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SearchIcon(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25 3a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM1 7.25a6.25 6.25 0 1112.5 0 6.25 6.25 0 01-12.5 0z"
        fill="#40BFFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.293 10.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414z"
        fill="#40BFFF"
      />
    </Svg>
  );
}

export default SearchIcon;
