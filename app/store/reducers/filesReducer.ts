import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  currentDir: new Array<string>(),
  update: 1,
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    reloadDir: state => {
      state.currentDir = [...state.currentDir];
      state.update = Date.now();
    },
    pushDir: (state, action: PayloadAction<{nextDir: string}>) => {
      const {nextDir} = action.payload;

      state.currentDir.push(nextDir);
    },
    popDir: state => {
      state.currentDir.pop();
    },
  },
});

export const {pushDir, popDir, reloadDir} = filesSlice.actions;

export default filesSlice.reducer;
