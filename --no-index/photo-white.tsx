import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgPhotoWhite = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}>
    <G clipPath="url(#photo_white_svg__a)">
      <Path
        fill={props.color}
        fillRule="evenodd"
        d="M1.375 5.5c0-1.14.923-2.062 2.063-2.062h15.125c1.139 0 2.062.923 2.062 2.062v11c0 1.14-.923 2.063-2.062 2.063H3.438A2.06 2.06 0 0 1 1.374 16.5zm1.375 9.222V16.5c0 .38.308.688.688.688h15.125c.38 0 .687-.308.687-.688v-1.778l-2.465-2.465a1.375 1.375 0 0 0-1.945 0l-.805.806.889.888a.687.687 0 1 1-.973.973l-4.729-4.73a1.375 1.375 0 0 0-1.944 0zm9.281-7.16a1.031 1.031 0 1 1 2.063 0 1.031 1.031 0 0 1-2.063 0"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="photo_white_svg__a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgPhotoWhite;
