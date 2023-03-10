import React, {useState} from 'react';
import {Switch} from 'react-native';
import {Colors} from '../../Styles';
import AppSwitch from '../commons/AppSwitch';
import CardBlock from '../commons/CardBlock';
import Selectable from '../commons/Selectable';
import SettingsModule from './SettingsModule';

export default function BackupModule() {
  const [checked, setChecked] = useState(false);

  const onValueChange = (checked: boolean) => {
    setChecked(checked);
  };

  return (
    <SettingsModule>
      <CardBlock>
        <Selectable label="iCloud Backup">
          <AppSwitch onValueChange={onValueChange} value={checked}></AppSwitch>
        </Selectable>
      </CardBlock>
    </SettingsModule>
  );
}
