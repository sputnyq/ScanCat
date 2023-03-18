import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FileRenderer from './FileRenderer';

type Props = {
  appFiles: AppFile[];
};

export default function DocsOverview({appFiles}: Props) {
  const sorted = [...appFiles].sort((a, b) => {
    return (b.timeStamp || 0) - (a.timeStamp || 0);
  });

  const itemData = sorted.map(file => ({
    renderer: <FileRenderer file={file} />,
  }));

  return (
    <View style={styles.root}>
      <FlatList
        data={itemData}
        extraData={itemData}
        numColumns={3}
        renderItem={Item}
      />
    </View>
  );
}

const Item = ({item}: any) => {
  return <View style={styles.wrapper}>{item.renderer}</View>;
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 3,
    paddingTop: 20,
  },
  wrapper: {
    flex: 1,
    maxWidth: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
