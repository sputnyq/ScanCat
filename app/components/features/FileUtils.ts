import * as RNFS from 'react-native-fs';

const SCANS = '/scans';
const rootDir = RNFS.DocumentDirectoryPath + SCANS;

export const moveFile = async (src: string, fileName: string) => {
  const newPath = rootDir + `/${fileName}`;
  if (!(await RNFS.exists(newPath))) {
    await RNFS.moveFile(src, newPath);
    return newPath;
  } else {
    //TODO: add some counter
  }
};

export const deleteFile = async (path: string) => {
  return RNFS.unlink(path);
};

export const listFiles = async () => {
  return RNFS.readDir(rootDir);
};

const getNameFromFile = (path: string) => {
  return path.split('/').reverse()[0];
};

export const readFile = async (path: string): Promise<AppFile | undefined> => {
  const res = await RNFS.stat(path);

  if (res.isFile()) {
    const timeStamp =
      typeof res.mtime === 'number' ? res.mtime : (res.mtime as Date).getTime();

    return {
      name: res.name || getNameFromFile(path),
      path: res.path,
      timeStamp,
    };
  }
  return undefined;
};
