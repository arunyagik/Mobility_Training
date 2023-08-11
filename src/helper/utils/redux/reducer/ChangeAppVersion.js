import { createReducer } from "@reduxjs/toolkit";

const initialState={
appVirsion:''
}

const ChangeAppVersion=createReducer(initialState,builder=>{
    builder.addCase('CHANGE_APP_VERSION',((state,action)=>{
        state.appVirsion=action.payload
      
    }))
})


export{ChangeAppVersion};