import {readDir, ReadDirItem} from 'react-native-fs';

import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {buildDirPath} from '../components/features/FileUtils';
import {RootState} from '../store';

export function useAppFiles() {
  const [appFiles, setAppFiles] = useState<AppFile[]>([]);
  const currentDir = useSelector<RootState, string[]>(s => s.files.currentDir);

  useEffect(() => {
    listFilesInFolder(buildDirPath(currentDir)).then(setAppFiles);
  }, [currentDir]);

  return {appFiles};
}

async function listFilesInFolder(path: string) {
  let files: AppFile[] = [];

  await readDir(path).then(res => {
    files = res.map(toAppFile);
  });

  return files;
}

function toAppFile(readDirItem: ReadDirItem) {
  const type = readDirItem.isDirectory() ? 'folder' : 'file';
  const appFile: AppFile = {
    name: readDirItem.name,
    path: readDirItem.path,
    timeStamp: readDirItem.mtime?.getTime(),
    type,
  };

  return appFile;
}
