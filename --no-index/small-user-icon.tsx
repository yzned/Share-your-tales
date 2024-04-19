import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgSmallUserIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={22}
    fill="none"
    {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.687 5.25a4.312 4.312 0 1 1 8.625 0 4.312 4.312 0 0 1-8.625 0M.095 18.768a7.906 7.906 0 0 1 15.81 0 .72.72 0 0 1-.419.665A17.9 17.9 0 0 1 8 21.063c-2.67 0-5.206-.583-7.486-1.63a.72.72 0 0 1-.42-.665"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSmallUserIcon;
