import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  list: {},
 
};

const TaskListReducer = createReducer(initialState, builder => {
  builder.addCase('STORE_TEXT', (state, action) => {
    // console.log('before',action.payload)
    state.list[action.payload[0]] = action.payload[1];
    // console.log('STORE_TEXT Line NO 9 in TaskListREducer', action.payload)
  });

  builder.addCase('DELETE', (state, action) => {
    delete state.list[action.payload];
  });
 
});

export {TaskListReducer};
