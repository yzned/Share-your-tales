import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgShare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <G clipPath="url(#share_svg__a)">
      <Path
        fill={props.color}
        fillRule="evenodd"
        d="M13.125 3.75a2.5 2.5 0 1 1 .688 1.722L6.795 9.37a2.5 2.5 0 0 1 0 1.258l7.018 3.9a2.5 2.5 0 1 1-.607 1.092l-7.019-3.9a2.5 2.5 0 1 1 0-3.444l7.018-3.898a2.5 2.5 0 0 1-.08-.629"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="share_svg__a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgShare;
