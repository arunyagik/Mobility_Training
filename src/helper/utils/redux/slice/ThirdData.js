import {createSlice} from '@reduxjs/toolkit';

export const ThirdData = createSlice({
  name: 'ThirdData',
  initialState: {
    ThirdData: [],
  },
  reducers: {
    ThirdDATA: (state, action) => {
      const ThirdPageDATA = state.ThirdData.findIndex(
        item => item.index === action.payload.index,
      );
      if (ThirdPageDATA !== -1) {
        state.ThirdData[ThirdPageDATA] = action.payload;
      } else {
        state.ThirdData.push(action.payload);
      }
    },
    ThirdScore:(state,action)=>{
      state.total= state.ThirdData.reduce((acc,curr)=>{
        return acc+curr.value
        
      },0)
     
    },
  },
});

// Action creators are generated for each case reducer function
export const {ThirdDATA,ThirdScore} = ThirdData.actions;

export default ThirdData.reducer;
