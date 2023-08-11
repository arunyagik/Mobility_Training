import React,{useEffect} from 'react';
import {LogBox, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FullSizeButton from '../../components/shared/buttons/FullSizeButton';
import FirstQuesAnswerPage from '../../screens/ques_ans/FirstQuesAnswerPage';
import SecondQuesAnswerPage from '../../screens/ques_ans/SecondQuesAnswerPage';
import ThirdQuesAnswerPage from '../../screens/ques_ans/ThirdQuesAnswerPage';
import Test from '../../screens/Test';
import CheckBox from '../../screens/checkBox/CheckBox';
import Result from '../../screens/checkBox/Result';
import Calculator from '../../screens/calculator/Calculator';
import DebounceTest from '../../screens/debounce/DebounceTest';
import BasicTacbel from '../../components/shared/tabel/BasicTacbel';
import RbsheetTest from '../../screens/RbsheetTest';
import DateTimePicker from '../../components/shared/dateTimePicker/DateTimePicker';
import DateTimeScreen from '../../screens/task/DateTimeScreen';
import ReduxScreen from '../../screens/reduxtask/ReduxScreen';
import ShowTaskComponent from '../../components/shared/showTaskComponent/ShowTaskComponent';
import TaskListTrainiingProject from '../../screens/reduxtask/TaskListTrainiingProject';
const MainNavigationStack = props => {
  const Stack = createStackNavigator();
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, [])
  return (
    
    <NavigationContainer>
      <Stack.Navigator headerShown={false}>
      {/* <Stack.Screen
          name="CheckBox"
          component={CheckBox}
          options={{headerShown: false}}
        /> */}
      <Stack.Screen
          name="TaskListTrainiingProject"
          component={TaskListTrainiingProject}
          options={{headerShown: false}}
        />
      {/* <Stack.Screen
          name="ReduxScreen"
          component={ReduxScreen}
          options={{headerShown: false}}
        /> */}
      {/* <Stack.Screen
          name="DateTimeScreen"
          component={DateTimeScreen}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="DateTimePicker"
          component={DateTimePicker}
          options={{headerShown: false}}
        /> */}
      {/* <Stack.Screen
          name="RbsheetTest"
          component={RbsheetTest}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="FirstQuesAnswerPage"
          component={FirstQuesAnswerPage}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name="SecondQuesAnswerPage"
          component={SecondQuesAnswerPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ThirdQuesAnswerPage"
          component={ThirdQuesAnswerPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Result"
          component={Result}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigationStack;

const styles = StyleSheet.create({});
