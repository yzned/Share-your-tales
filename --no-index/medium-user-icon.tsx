import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgMediumUserIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={42}
    fill="none"
    {...props}>
    <Path
     fill={props.color}
      fillRule="evenodd"
      d="M7.375 9.5a8.625 8.625 0 1 1 17.25 0 8.625 8.625 0 0 1-17.25 0M.19 36.535C.338 27.93 7.36 21 16 21s15.662 6.93 15.81 15.536c.01.57-.319 1.093-.838 1.331a35.8 35.8 0 0 1-14.971 3.258 35.8 35.8 0 0 1-14.973-3.258 1.44 1.44 0 0 1-.838-1.332"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMediumUserIcon;
