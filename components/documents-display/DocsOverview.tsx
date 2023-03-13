import React, {useEffect, useState} from 'react';
import {ReadDirItem} from 'react-native-fs';
import {ScrollView, View, Image, StyleSheet, FlatList} from 'react-native';
import {listFiles} from '../features/FileUtils';

type ScanFile = {
  name: string;
  path: string;
};

export default function DocsOverview() {
  const [files, setFiles] = useState<ReadDirItem[]>([]);

  useEffect(() => {
    listFiles().then(listed => {
      console.log('tstst');
      setFiles([...listed]);
    });
  }, []);

  const itemData = files.map(file => {
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
