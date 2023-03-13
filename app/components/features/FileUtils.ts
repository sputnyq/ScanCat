import * as RNFS from 'react-native-fs';

const SCANS = '/scans';
const rootDir = RNFS.DocumentDirectoryPath + SCANS;

export const moveFile = async (src: string) => {
  return RNFS.moveFile(src, rootDir + `/${Date.now()}` + '.jpeg');
};

export const listFiles = async () => {
  return RNFS.readDir(rootDir);
};
