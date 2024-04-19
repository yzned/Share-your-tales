import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgCamera = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}>
    <G fill={props.color} clipPath="url(#camera_svg__a)">
      <Path d="M11 8.25a3.437 3.437 0 1 0 0 6.875 3.437 3.437 0 0 0 0-6.875" />
      <Path
        fillRule="evenodd"
        d="M8.566 2.815a45 45 0 0 1 4.868 0 2.7 2.7 0 0 1 2.139 1.275l.752 1.206c.22.352.592.59 1.018.65q.53.076 1.056.164c1.312.218 2.226 1.368 2.226 2.666V16.5a2.75 2.75 0 0 1-2.75 2.75H4.125a2.75 2.75 0 0 1-2.75-2.75V8.776c0-1.298.914-2.448 2.226-2.666q.526-.088 1.056-.163c.426-.06.799-.3 1.018-.65l.753-1.207a2.7 2.7 0 0 1 2.138-1.275m-2.379 8.872a4.813 4.813 0 1 1 9.626 0 4.813 4.813 0 0 1-9.625 0m11-1.374a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.374"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="camera_svg__a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgCamera;
