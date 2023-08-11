

import { createSlice } from '@reduxjs/toolkit'

export const FirstData=createSlice({
  name: 'firstData',
  initialState: {
    firstData: [],
    total:''
   
  },
  reducers: {
    FirstDATA: (state,action) => {
      const FirstPageDATA = state.firstData.findIndex(
        item => item.index === action.payload.index,
      );
      if (FirstPageDATA !== -1) {
        state.firstData[FirstPageDATA] = action.payload;
      } else {
        state.firstData.push(action.payload);
      }
    },
   
    FirstScore:(state,action)=>{
      state.total= state.firstData.reduce((acc,curr)=>{
        return acc+curr.value
        
      },0)
     
    },
  }
  
})

// Action creators are generated for each case reducer function
export const { FirstDATA ,FirstScore} = FirstData.actions

export default FirstData.reducer