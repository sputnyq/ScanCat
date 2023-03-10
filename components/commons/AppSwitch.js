import React from 'react';
import {Switch} from 'react-native';
import {Colors} from '../../Styles';

export default function AppSwitch(props) {
  const {value, onValueChange} = props;
  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{true: Colors.main}}
    />
  );
}
