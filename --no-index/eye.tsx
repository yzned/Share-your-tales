import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgEye = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <G clipPath="url(#eye_svg__a)">
      <G fill={props.fill} clipPath="url(#eye_svg__b)">
        <Path d="M10.446 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
        <Path
          fillRule="evenodd"
          d="M1.11 10.59a1.65 1.65 0 0 1 0-1.186A10 10 0 0 1 10.444 3c4.257 0 7.893 2.66 9.336 6.41a1.65 1.65 0 0 1 0 1.186A10 10 0 0 1 10.446 17c-4.257 0-7.893-2.66-9.336-6.41M14.446 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
          clipRule="evenodd"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="eye_svg__a">
        <Rect width={20} height={20} fill="#fff" rx={10} />
      </ClipPath>
      <ClipPath id="eye_svg__b">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgEye;
