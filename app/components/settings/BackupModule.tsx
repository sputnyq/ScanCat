import React, {useState} from 'react';
import {Settings} from 'react-native';
import i18n from '../../i18n';

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
        <Selectable label={i18n('icloudBackup')}>
          <AppSwitch onValueChange={onValueChange} value={checked} />
        </Selectable>
      </CardBlock>
    </SettingsModule>
  );
}
