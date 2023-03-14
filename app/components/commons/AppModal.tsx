import React from 'react';
import {ModalProps, Button, Modal, View, StyleSheet} from 'react-native';
import {Colors} from '../../../Styles';
import Grabber from './Grabber';

export default function AppModal(props: ModalProps) {
  const {onRequestClose} = props;
  return (
    <Modal presentationStyle="pageSheet" animationType="slide" {...props}>
      <View style={styles.root}>
        <Grabber />
        <View style={styles.bar}>
          <Button
            color={Colors.main}
            onPress={onRequestClose}
            title={'Close'}
          />
        </View>
        {props.children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: Colors.gray100,
  },
  bar: {
    width: '100%',
    flexDirection: 'row-reverse',
  },
});
