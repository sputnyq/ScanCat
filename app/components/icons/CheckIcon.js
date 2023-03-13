import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../../Styles';

const CheckIcon = props => (
  <Svg
    height={30}
    width={30}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m7 12 2.89 2.89v0c.061.061.159.061.22 0v0L17 8"
      stroke={Colors.main}
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CheckIcon;
