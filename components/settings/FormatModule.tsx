import React, {useState} from 'react';
import CardBlock from '../commons/CardBlock';
import Divider from '../commons/Divider';
import Label from '../commons/Label';
import Selectable from '../commons/Selectable';
import SettingsModule from './SettingsModule';

export default function FormatModule() {
  const [isPDF, setIsPDF] = useState(false);

  const onSelect = (value: boolean) => {
    return function () {
      setIsPDF(value);
    };
  };

  return (
    <SettingsModule>
      <Label label="Format" />
      <CardBlock>
        <Selectable
          selected={isPDF}
          onSelect={onSelect(true)}
          label="PDF"></Selectable>
        <Divider />
        <Selectable
          selected={!isPDF}
          onSelect={onSelect(false)}
          label="JPEG"></Selectable>
      </CardBlock>
    </SettingsModule>
  );
}
