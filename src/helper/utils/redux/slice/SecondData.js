import {createSlice, current} from '@reduxjs/toolkit';
import {View} from 'react-native';

export const SecondData = createSlice({
  name: 'SecondData',

  initialState: {
    SecondData: [],
    total:''
  },
  reducers: {
    SecondDATA: (state, action) => {
      const SecondPageDATA = state.SecondData.findIndex(
        item => item.index === action.payload.index,
      );
      if (SecondPageDATA !== -1) {
        state.SecondData[SecondPageDATA] = action.payload;
      } else {
        state.SecondData.push(action.payload);
      }
      //   console.log(state.SecondData)

      // const total = state.SecondData;
      
    },
    TotalScore:(state,action)=>{
      state.total= state.SecondData.reduce((acc,curr)=>{
        return acc+curr.value
        
      },0)
     
    },
  },
  

});

// Action creators are generated for each case reducer function
export const {SecondDATA,TotalScore} = SecondData.actions;

export default SecondData.reducer;
