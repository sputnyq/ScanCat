import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../Styles';

const ScannerIcon = props => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fill="none"
      stroke={Colors.white}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={12}
      d="M162 120v30a12 12 135 0 1-12 12H42a12 12 45 0 1-12-12v-30m0-48V42a12 12 135 0 1 12-12h108a12 12 45 0 1 12 12v30M30 96h132"
    />
  </Svg>
);

export default ScannerIcon;
