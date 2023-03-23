import React from 'react';
import {
  Modal,
  ModalProps,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from '../../Styles';
import Grabber from './Grabber';
import TouchableIcon from './TouchableIcon';

interface Props {
  title?: string;
}

export default function AppModal(props: ModalProps & Props) {
  const {onRequestClose, title} = props;
  return (
    <Modal presentationStyle="pageSheet" animationType="slide" {...props}>
      <SafeAreaView style={styles.root}>
        <Grabber />
        <View style={styles.bar}>
          <View style={styles.wrapper}></View>
          {title && (
            <View style={styles.text}>
              <Text numberOfLines={1} style={{color: Colors.main}}>
                {title}
              </Text>
            </View>
          )}
          <View style={styles.wrapper}>
            <TouchableIcon
              touchProps={{onPress: onRequestClose}}
              iconProps={{name: 'ios-close-circle-outline'}}
            />
          </View>
        </View>
        {props.children}
      </SafeAreaView>
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
    flexDirection: 'row',
    gap: 10,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  wrapper: {
    width: 30,
    justifyContent: 'center',
  },
  text: {
    maxWidth: 250,
    alignItems: 'center',
    color: Colors.main,
  },
});
