import React, {useMemo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FileRenderer from './FileRenderer';

type Props = {
  appFiles: AppFile[];
};

const SORT_VALUES = {
  folder: 1,
  file: 0,
};

export default function DocsOverview({appFiles}: Props) {
  const itemData = useMemo(() => {
    return [...appFiles]
      .sort((a, b) => {
        return (b.timeStamp || 0) - (a.timeStamp || 0);
      })
      .sort((a, b) => {
        return SORT_VALUES[b.type] - SORT_VALUES[a.type];
      })
      .map(file => ({
        renderer: <FileRenderer file={file} />,
      }));
  }, [appFiles]);

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
