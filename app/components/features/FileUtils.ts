import * as RNFS from 'react-native-fs';

const SCANS = '/scans';
const rootDir = RNFS.DocumentDirectoryPath + SCANS;

export const moveFile = async (src: string, idx: number) => {
  const newPath = rootDir + `/${Date.now()}-${idx}` + '.jpeg';
  await RNFS.moveFile(src, newPath);
  return newPath;
};

export const deleteFile = async (path: string) => {
  return RNFS.unlink(path);
};

export const listFiles = async () => {
  return RNFS.readDir(rootDir);
};

export const readFile = async (path: string): Promise<AppFile | undefined> => {
  const res = await RNFS.stat(path);
  if (res.isFile()) {
    return {
      name: res.name || 'test',
      path: res.path,
      //@ts-ignore
      timeStamp: (res.mtime! as Date)?.getTime(),
    };
  }
  return undefined;
};
