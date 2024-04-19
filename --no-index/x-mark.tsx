import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgXMark = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}>
    <G
      fill={props.color}
      fillRule="evenodd"
      clipPath="url(#x-mark_svg__a)"
      clipRule="evenodd">
      <Path d="M2.093 2.093c.19-.19.499-.19.69 0l8.124 8.125a.488.488 0 0 1-.69.69L2.094 2.781a.49.49 0 0 1 0-.69" />
      <Path d="M10.907 2.093c.19.19.19.499 0 .69l-8.125 8.124a.488.488 0 0 1-.69-.69l8.126-8.124c.19-.19.499-.19.69 0" />
    </G>
    <Defs>
      <ClipPath id="x-mark_svg__a">
        <Path fill="#fff" d="M0 0h13v13H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgXMark;
