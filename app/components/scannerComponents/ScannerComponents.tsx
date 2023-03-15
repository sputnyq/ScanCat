import React, {useState} from 'react';
import {Settings} from 'react-native';
import ScannerButton from '../scanner-button/ScannerButton';

import DocumentScanner, {
  ScanDocumentResponseStatus,
} from 'react-native-document-scanner-plugin';
import {useDispatch} from 'react-redux';
import {addSingleFile} from '../../store/reducers/filesReducer';
import {moveFile, readFile} from '../features/FileUtils';
import {IS_PDF} from '../settings/SettingsKeys';
import {Alert} from 'react-native';

export default function ScannerComponents() {
  const dispatch = useDispatch();

  const [scannedImages, setScannedImages] = useState<string[] | undefined>(
    undefined,
  );

  const onCancel = () => {
    //TODO: delete files
    setScannedImages(undefined);
  };

  const onOk = (value?: string) => {};

  const createNameInputAlert = () => {
    const date = new Date();

    const defaultText = `Scan-${date.toLocaleString()}`;

    Alert.prompt(
      'Input file Name',
      undefined,
      [
        {text: 'cancel', onPress: onCancel},
        {text: 'OK', onPress: onOk},
      ],
      'plain-text',
      defaultText,
    );
  };

  const scanDocument = () => {
    const isPdf = Settings.get(IS_PDF);

    DocumentScanner.scanDocument().then(res => {
      if (res?.status === ScanDocumentResponseStatus.Success) {
        setScannedImages(res.scannedImages);
        createNameInputAlert();
        // res.scannedImages?.forEach(async (si, idx) => {
        //   const filePath = await moveFile(si, idx);
        //   const newAppFile = await readFile(filePath);
        //   if (newAppFile) {
        //     dispatch(addSingleFile({file: newAppFile}));
        //   }
        // });
      }
    });
  };

  return <ScannerButton onPress={scanDocument} />;
}
