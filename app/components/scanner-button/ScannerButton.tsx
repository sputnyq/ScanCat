import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, FontSizes} from '../../../Styles';
import TouchableIcon from '../commons/TouchableIcon';

type Props = {
  onPress: () => void;
};

export default function ScannerButton({onPress}: Props) {
  return (
    <View style={styles.root}>
      <View style={styles.shadow1}>
        <View style={styles.shadow2}>
          <LinearGradient style={styles.touch} colors={['#793ac1', '#8f44e5']}>
            <TouchableIcon
              touchProps={{
                onPress,
              }}
              iconProps={{
                name: 'ios-scan',
                size: FontSizes.huge,
                color: Colors.white,
              }}
            />
            {/* <TouchableOpacity onPress={props.onTap}>
              <Icon
                name="ios-scan"
                size={FontSizes.huge}
                color={Colors.white}
              />
            </TouchableOpacity> */}
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 60,
    right: 40,
  },
  shadow1: {
    shadowColor: '#43206b',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
  shadow2: {
    shadowColor: '#c960ff',
    shadowOffset: {width: -10, height: -10},
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  touch: {
    height: 74,
    width: 74,
    borderRadius: 37,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
