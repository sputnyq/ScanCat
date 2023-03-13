export type ADD_FILE = {
  type: 'ADD_FILE';
  payload: {
    filePath: string;
  };
};

export type AppAction = ADD_FILE;
