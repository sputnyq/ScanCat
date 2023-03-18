import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, FontSizes} from '../../Styles';

type Props = {
  label: string;
  selected?: boolean;
  onSelect?: () => void;
};

export default function Selectable(props: PropsWithChildren<Props>) {
  const {label, onSelect, selected = false, children} = props;

  return (
    <TouchableNativeFeedback onPress={onSelect}>
      <View style={styles.root}>
        <View>
          <Text>{label}</Text>
        </View>
        {children ? (
          <View>{children}</View>
        ) : (
          <View>
            {selected ? (
              <Icon
                name="ios-checkmark-outline"
                color={Colors.main}
                size={FontSizes.large}
              />
            ) : null}
          </View>
        )}
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 8,
    height: 45,
  },
});
