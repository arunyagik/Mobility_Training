import {createSlice} from '@reduxjs/toolkit';
export const CheckBox = createSlice({
  name: 'checkBox',
  initialState: {
    checkBox: [],
  },
  reducers: {
    CheckBOX: (state, action) => {
      const checkboxDATA = state.checkBox?.map(item => item.id);

      if (checkboxDATA.includes(action.payload.id)) {
        state.checkBox = state.checkBox.filter(
          it => it.id !== action.payload.id,
        );
      } else {
        state.checkBox = [...state.checkBox,action.payload];
        // console.log('checkboxDATAcheckboxDATA',...state.checkBox,action.payload)

      }
    },
    selectAll: (state, action) => {
      state.checkBox = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {CheckBOX, selectAll} = CheckBox.actions;

export default CheckBox.reducer;
