import { createSlice } from '@reduxjs/toolkit'

export const TextSlice = createSlice({
  name: 'textData',
  initialState: {
    textData: [],
    fullfillText:''

  },
  reducers: {
    TextDATA: (state,action) => {
        // console.log('====================================TextDATA');
        // console.log('TextDATA',action);
        // console.log('====================================TextDATA');
        state.textData.push(action.payload);
    },
   
    deleteText: (state, action) => {
        const indexToDelete = action.payload;
        // console.log('indexTodelte',indexToDelete)
        state.textData.splice(indexToDelete);
      },
      fullfillText: (state,action) => {
        console.log('====================================TextDATA');
        console.log('TextDATA',action);
        console.log('====================================TextDATA');
        state.fullfillText=action.payload
    },
    updateText: (state, action) => {
        const { index, newText } = action.payload;
        //  console.log('====================================updateText');

        // console.log('action.payload', state.textData[index].text = newText)
        // console.log('====================================updateText');

        state.textData[index].text = newText;
      },

   
  },
//   reducers: {
//     removeDATA: (state,action) => {
//         console.log('====================================removeData');
//         console.log('removeData',action);
//         console.log('====================================removeData');
//         state.removeData.push(action.payload);
//     },
// }
})

// Action creators are generated for each case reducer function
export const {TextDATA,deleteText,fullfillText,updateText} = TextSlice.actions

export default TextSlice.reducer