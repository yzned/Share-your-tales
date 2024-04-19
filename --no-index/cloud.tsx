import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgCloud = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={36}
    fill="none"
    {...props}>
    <G clipPath="url(#cloud_svg__a)">
      <Path
        fill="#B8DE64"
        fillRule="evenodd"
        d="M16.25 5.625a9 9 0 0 0-8.97 9.744 7.875 7.875 0 0 0 3.345 15.006H27.5a6.75 6.75 0 0 0 3.309-12.634 5.625 5.625 0 0 0-6.199-6.454 9 9 0 0 0-8.36-5.662m3.046 8.205a1.125 1.125 0 0 0-1.591 0l-4.5 4.5a1.125 1.125 0 0 0 1.59 1.59l2.58-2.579v7.409a1.125 1.125 0 0 0 2.25 0v-7.409l2.58 2.58a1.125 1.125 0 0 0 1.59-1.591z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="cloud_svg__a">
        <Path fill="#fff" d="M.5 0h36v36H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgCloud;
