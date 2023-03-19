import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  currentDir: new Array<string>(),

  selectActive: false,
  selectedFiles: new Array<string>(),
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    reloadDir: state => {
      state.currentDir = [...state.currentDir];
      state.selectedFiles = [];
    },
    pushDir: (state, {payload}: PayloadAction<{nextDir: string}>) => {
      const {nextDir} = payload;

      state.currentDir.push(nextDir);
      state.selectedFiles = [];
    },
    popDir: state => {
      state.currentDir.pop();
      state.selectedFiles = [];
    },
    setSelectActive: (state, {payload}: PayloadAction<{active: boolean}>) => {
      state.selectActive = payload.active;
      state.selectedFiles = [];
    },
    addSelectedFile: (state, {payload}: PayloadAction<{filePath: string}>) => {
      state.selectedFiles.push(payload.filePath);
    },
    removeSelectedFile: (
      state,
      {payload}: PayloadAction<{filePath: string}>,
    ) => {
      state.selectedFiles = state.selectedFiles.filter(
        f => f !== payload.filePath,
      );
    },
  },
});

export const {
  pushDir,
  popDir,
  reloadDir,
  setSelectActive,
  addSelectedFile,
  removeSelectedFile,
} = filesSlice.actions;

export default filesSlice.reducer;
