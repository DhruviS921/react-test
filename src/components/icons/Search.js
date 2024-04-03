import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
const SvgSearch = (props) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    viewBox='0 0 20 20'
    {...props}
  >
    <G fill='#8E94A6' fillRule='evenodd' clipRule='evenodd'>
      <Path d='M9.167 3.333a5.833 5.833 0 1 0 0 11.667 5.833 5.833 0 0 0 0-11.667m-7.5 5.834a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0' />
      <Path d='M13.284 13.285a.833.833 0 0 1 1.179 0l3.625 3.625a.833.833 0 0 1-1.179 1.178l-3.625-3.625a.833.833 0 0 1 0-1.178' />
    </G>
  </Svg>
);
export default SvgSearch;
