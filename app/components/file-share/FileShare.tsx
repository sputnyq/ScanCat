import React from 'react';
import {Share} from 'react-native';
import TouchableIcon from '../commons/TouchableIcon';

type Props = {
  file: AppFile;
};

export default function FileShare({file}: Props) {
  const onShare = () => {
    Share.share({
      url: file.path,
    }).catch(err => {
      //TODO: handle error
      console.log(err);
    });
  };
  return (
    <TouchableIcon
      iconProps={{name: 'ios-share-outline'}}
      touchProps={{onPress: onShare}}
    />
  );
}
