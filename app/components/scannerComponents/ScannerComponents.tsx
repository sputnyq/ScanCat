import React, {useEffect, useState} from 'react';
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
import i18n from '../../i18n';

export default function ScannerComponents() {
  const dispatch = useDispatch();

  const [scannedImages, setScannedImages] = useState<string[] | undefined>(
    undefined,
  );

  useEffect(() => {
    if (scannedImages?.length) {
      createNameInputAlert();
    }
  }, [scannedImages]);

  const getDefaultFileName = () => {
    const date = new Date();
    return `Scan-${date.toLocaleString()}`;
  };

  const onCancel = () => {
    //TODO: delete files
    setScannedImages(undefined);
  };

  const moveImage = async (src: string, fileName: string) => {
    const filePath = await moveFile(src, fileName);

    const newAppFile = await readFile(filePath);

    if (newAppFile) {
      dispatch(addSingleFile({file: newAppFile}));
    }
  };

  const onOk = async (value?: string) => {
    if (!scannedImages) {
      return;
    }

    if (!value) {
      value = getDefaultFileName();
    }

    const filesAmount = scannedImages.length;

    if (filesAmount > 1) {
      scannedImages.forEach(async (si, idx) => {
        //TODO: change to rea
        const fileName = value + `-${idx}.jpeg`;

        await moveImage(si, fileName);
      });
    } else {
      await moveImage(scannedImages[0], value + '.jpeg');
    }
  };

  const createNameInputAlert = () => {
    Alert.prompt(
      i18n('inputFileName'),
      undefined,
      [
        {text: i18n('cancel') || 'cancel', onPress: onCancel},
        {text: i18n('ok') || 'OK', onPress: onOk},
      ],
      'plain-text',
    );
  };

  const scanDocument = () => {
    const isPdf = Settings.get(IS_PDF);

    DocumentScanner.scanDocument().then(res => {
      if (res?.status === ScanDocumentResponseStatus.Success) {
        setScannedImages(res.scannedImages);
      }
    });
  };

  return <ScannerButton onPress={scanDocument} />;
}
