import React, {useState} from 'react';
import {Settings} from 'react-native';

import AppSwitch from '../commons/AppSwitch';
import CardBlock from '../commons/CardBlock';
import Selectable from '../commons/Selectable';
import {ICLOUD_BACKUP} from './SettingsKeys';
import SettingsModule from './SettingsModule';

export default function BackupModule() {
  const [checked, setChecked] = useState(Settings.get(ICLOUD_BACKUP));

  const onValueChange = (checked: boolean) => {
    Settings.set({[ICLOUD_BACKUP]: checked});
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
