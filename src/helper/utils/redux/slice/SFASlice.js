import {createSlice} from '@reduxjs/toolkit';

export const SFASlice = createSlice({
  name: 'SFAData',
  initialState: {
    sfaData: [],
    quantity: {},
    selectedProducts: {},
    totalQuantity: 0,
    mrpTotal:0,
    total: {},
    PTR: {},

  },

  reducers: {
    SFAData: (state, action) => {
      const {value, index, mrp, id, PTR} = action.payload;
      // console.log('state.quantity[id]state.quantity[id]',state.quantity[id])
      // console.log('action.paylaod,paylaod,paylaod',action.payload);
    const existingProduct = state.sfaData.find(product => product.id == id);
      // console.log('existingProductexistingProduct',existingProduct)
      if (!existingProduct) {
        state.sfaData.push({
          id: id,
          quantity: state.quantity[id],
          total: value * mrp,
          ptr: PTR * value,
        });
      } else {
        // const {value, id} = action.payload;
        // const prevQuantity = state.quantity[id] || 0 
        existingProduct.quantity = state.quantity[id];
        existingProduct.total =  existingProduct.quantity * mrp;
        existingProduct.ptr = PTR *  existingProduct.quantity;
        // console.log('existingProduct.quantity',existingProduct.quantity)
      }
    },
    SelectedProduct: (state, action) => {
      const {value, index, mrp, id, PTR,product} = action.payload;

      // console.log('acton', action.payload);

      state.selectedProducts[id]=action.payload
    },

    Quantity: (state, action) => {
      const {value, index, mrp, id, PTR} = action.payload;
      state.quantity[id] =value;
      console.log('..............>',action.payload)
      state.total[action.payload.id]= action.payload.mrp*action.payload.value
      state.PTR[action.payload.id]= action.payload.PTR*action.payload.value
      // console.log('inredux=====',state.total);

    
      state.totalQuantity = Object.values(state.quantity).reduce((sum, qty) => sum + qty, 0);
  
    },
  },
});

// Action creators are generated for each case reducer function
export const {SFAData, Quantity, total, SelectedProduct} = SFASlice.actions;

export default SFASlice.reducer;
