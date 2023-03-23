import React from 'react';
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from 'react-native-bouncy-checkbox';
import {Colors} from '../../Styles';

export default function CheckBox(props: IBouncyCheckboxProps) {
  return (
    <BouncyCheckbox
      fillColor={Colors.gray300}
      unfillColor={Colors.white}
      size={30}
      {...props}
    />
  );
}
