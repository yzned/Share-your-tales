import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgBigXmark = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <G
      fill={props.color}
      fillRule="evenodd"
      clipPath="url(#bigXmark_svg__a)"
      clipRule="evenodd">
      <Path d="M3.22 3.22a.75.75 0 0 1 1.06 0l12.5 12.5a.75.75 0 1 1-1.06 1.06L3.22 4.28a.75.75 0 0 1 0-1.06" />
      <Path d="M16.78 3.22a.75.75 0 0 1 0 1.06l-12.5 12.5a.75.75 0 0 1-1.06-1.06l12.5-12.5a.75.75 0 0 1 1.06 0" />
    </G>
    <Defs>
      <ClipPath id="bigXmark_svg__a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgBigXmark;
