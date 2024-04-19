import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgMoon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <G clipPath="url(#moon_svg__a)">
      <Path
        fill={props.color}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.752 15.002A9.7 9.7 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.75 9.75 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.75 9.75 0 0 0 9.002-5.998"
      />
    </G>
    <Defs>
      <ClipPath id="moon_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgMoon;
