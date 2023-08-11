import {configureStore} from '@reduxjs/toolkit';
import { ChangeAppVersion } from './reducer/ChangeAppVersion';
import { TaskListReducer } from './reducer/TaskListReducer';
const Store_addCase = configureStore({
  reducer: {
ChangeAppVersion,
TaskListReducer

  },
});
export {Store_addCase};
