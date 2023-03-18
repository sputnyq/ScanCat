import * as RNFS from 'react-native-fs';
const FILE_SEPARATOR = '/';

export const moveFile = async (
  src: string,
  currentDir: string[],
  fileName: string,
) => {
  const newPath = buildDirPath(currentDir) + FILE_SEPARATOR + fileName;
  if (!(await RNFS.exists(newPath))) {
    await RNFS.moveFile(src, newPath);
    return newPath;
  } else {
    //TODO: add some counter
  }
};

export async function deleteFile(path: string) {
  return RNFS.unlink(path);
}

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
      type: 'file',
    };
  }
  return undefined;
};

export const createDir = async (fullPath: string) => {
  return RNFS.mkdir(fullPath);
};

export const getFolderNameFromPath = (path: string) => {
  return path.split(FILE_SEPARATOR).reverse()[0];
};

export function buildDirPath(currentDir: string[]) {
  const root = RNFS.DocumentDirectoryPath;
  if (currentDir.length === 0) {
    return root;
  }
  const dirPath = currentDir.join(FILE_SEPARATOR);
  return root + FILE_SEPARATOR + dirPath;
}
