import { createSlice } from '@reduxjs/toolkit'

export const CalculatorSlice = createSlice({
  name: 'calculatortData',
  initialState: {
    calculatorData: []
  },
  reducers: {
    CalculatorDATA: (state,action) => {
        // console.log('====================================CalculatorDATA');
        // console.log('CalculatorDATA',action);
        // console.log('====================================CalculatorDATA');
        state.calculatorData=action.payload
    },
    CureentDATA: (state,action) => {
        // console.log('====================================CureentDATA');
        // console.log('CureentDATA',action);
        // console.log('====================================CureentDATA');
        state.calculatorData=action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { CalculatorDATA,CureentDATA } = CalculatorSlice.actions

export default CalculatorSlice.reducer