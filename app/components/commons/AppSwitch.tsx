import React from 'react';
import {Switch, SwitchProps} from 'react-native';
import {Colors} from '../../../Styles';

export default function AppSwitch(props: SwitchProps) {
  const {value, onValueChange} = props;
  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{true: Colors.main}}
      {...props}
    />
  );
}
