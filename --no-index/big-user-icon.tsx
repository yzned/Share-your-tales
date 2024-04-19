import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgBigUserIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={82}
    fill="none"
    {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.75 18C14.75 8.473 22.473.75 32 .75S49.25 8.473 49.25 18 41.527 35.25 32 35.25 14.75 27.527 14.75 18M.38 72.07C.676 54.86 14.72 41 32 41s31.325 13.86 31.62 31.072a2.88 2.88 0 0 1-1.675 2.662C52.825 78.92 42.682 81.25 32 81.25s-20.826-2.332-29.946-6.517A2.88 2.88 0 0 1 .38 72.07"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBigUserIcon;
