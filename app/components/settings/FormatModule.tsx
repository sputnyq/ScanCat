import React, {useState} from 'react';
import {Settings} from 'react-native';
import i18n from '../../i18n';
import CardBlock from '../commons/CardBlock';
import Divider from '../commons/Divider';
import Label from '../commons/Label';
import Selectable from '../commons/Selectable';
import {IS_PDF} from './SettingsKeys';
import SettingsModule from './SettingsModule';

export default function FormatModule() {
  const [isPDF, setIsPDF] = useState(Settings.get(IS_PDF));

  const onSelect = (value: boolean) => {
    return function () {
      Settings.set({[IS_PDF]: value});
      setIsPDF(value);
    };
  };

  return (
    <SettingsModule>
      <Label label={i18n('format')} />
      <CardBlock>
        <Selectable selected={isPDF} onSelect={onSelect(true)} label="PDF" />
        <Divider />
        <Selectable selected={!isPDF} onSelect={onSelect(false)} label="JPEG" />
      </CardBlock>
    </SettingsModule>
  );
}
