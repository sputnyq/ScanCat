import React, {useState} from 'react';
import {Button, Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../Styles';
import SmileyIcon from '../icons/SmileyIcon';
import Profile from '../profile/Profile';

export default function Toolsbar() {
  const [visible, setVisible] = useState(false);

  const openProfileModal = () => {
    setVisible(true);
  };

  const closeProfileModal = () => {
    setVisible(false);
  };

  //TODO: increase touch area
  return (
    <View style={styles.root}>
      <View>
        <TouchableOpacity onPress={openProfileModal}>
          <SmileyIcon />
        </TouchableOpacity>
      </View>
      <View>
        <Button color={Colors.white} title="Select"></Button>
      </View>
      <Modal
        presentationStyle="pageSheet"
        animationType="slide"
        onRequestClose={closeProfileModal}
        visible={visible}>
        <Profile onClose={closeProfileModal} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 80,
    paddingRight: 20,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
