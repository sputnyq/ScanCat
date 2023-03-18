import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, FontSizes} from '../../../Styles';

type Props = {
  touchProps?: TouchableOpacityProps;
  iconProps: IconProps;
};
export default function TouchableIcon(props: Props) {
  const {iconProps, touchProps} = props;
  return (
    <TouchableOpacity {...touchProps} style={styles.root}>
      <Icon
        color={Colors.main}
        size={FontSizes.big}
        style={styles.icon}
        {...iconProps}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
});
