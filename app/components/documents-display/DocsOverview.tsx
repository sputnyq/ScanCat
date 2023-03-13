import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

type ScanFile = {
  name: string;
  path: string;
};

export default function DocsOverview() {
  const appFiles = useSelector<RootState, AppFile[]>(s => s.files.appFiles);

  const sorted = [...appFiles].sort((a, b) => {
    return (b.timeStamp || 0) - (a.timeStamp || 0);
  });

  const itemData = sorted.map(file => {
    return {
      icon: <Image style={styles.image} source={{uri: file.path}}></Image>,
    };
  });
  return (
    <View style={styles.root}>
      <FlatList data={itemData} numColumns={3} renderItem={Item}></FlatList>
    </View>
  );
}

const Item = ({item}: any) => {
  return <View style={styles.wrapper}>{item.icon}</View>;
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 3,
  },
  wrapper: {
    flex: 1,
    maxWidth: '33%',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 90,
    height: 220,
    resizeMode: 'contain',
  },
});
