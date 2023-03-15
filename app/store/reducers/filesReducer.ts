import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  appFiles: new Array<AppFile>(),
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    deleteSingleFile: (state, action: PayloadAction<{file: AppFile}>) => {
      const {path} = action.payload.file;
      state.appFiles = state.appFiles.filter(f => f.path !== path);
    },
    addSingleFile: (state, action: PayloadAction<{file: AppFile}>) => {
      state.appFiles.push(action.payload.file);
    },
    addFiles: (state, action: PayloadAction<{files: AppFile[]}>) => {
      state.appFiles.push(...action.payload.files);
    },
    clearFiles: state => {
      state.appFiles = [];
    },
  },
});

export const {addSingleFile, addFiles, clearFiles, deleteSingleFile} =
  filesSlice.actions;

export default filesSlice.reducer;
