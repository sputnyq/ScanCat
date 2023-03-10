import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';
import {Image} from 'react-native-svg';

export default () => {
  const [scannedImage, setScannedImage] = useState();
  console.log(scannedImage);

  const scanDocument = async () => {
    // start the document scanner
    const {scannedImages} = await DocumentScanner.scanDocument();

    // get back an array with scanned image file paths
    if (scannedImages?.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages[0]);
    }
  };

  useEffect(() => {
    // call scanDocument on load
    scanDocument();
    return () => {
      console.log('close');
    };
  }, []);

  return null;
};
