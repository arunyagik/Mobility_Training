import { configureStore } from '@reduxjs/toolkit'
import FirstData from './slice/FirstData'
import SecondData from './slice/SecondData'
import ThirdData from './slice/ThirdData'
import CheckBox  from './slice/CheckBoxSlice'
import CalculatorSlice from './slice/CalculatorSlice'
import TextSlice from './slice/TextSlice'
import SFASlice from './slice/SFASlice'

export default configureStore({
  reducer: {

 FirstData:FirstData,
 SecondData:SecondData,
 ThirdData:ThirdData,
 CheckBox:CheckBox,
 CalculatorSlice:CalculatorSlice,
 TextSlice:TextSlice,
 SFASlice:SFASlice,

  }
})