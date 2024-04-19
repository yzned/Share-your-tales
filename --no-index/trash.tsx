import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgTrash = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={28}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M18.5 3.97v.303a65 65 0 0 1 5.17.683 1 1 0 1 1-.34 1.971l-.28-.048-1.34 17.428A4 4 0 0 1 17.722 28H7.278a4 4 0 0 1-3.988-3.693L1.95 6.879l-.28.048a1 1 0 0 1-.34-1.97 65 65 0 0 1 5.17-.684v-.302C6.5 1.885 8.117.104 10.254.036a70 70 0 0 1 4.492 0C16.884.104 18.5 1.885 18.5 3.97m-8.182-1.935a68 68 0 0 1 4.364 0c1.006.032 1.818.877 1.818 1.936v.15a66 66 0 0 0-8 0v-.15c0-1.06.812-1.904 1.818-1.936m-.473 7.927a1 1 0 0 0-1.999.076l.462 12a1 1 0 0 0 1.999-.076zm7.308.076a1 1 0 0 0-1.999-.076l-.461 12a1 1 0 0 0 1.998.076z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTrash;
