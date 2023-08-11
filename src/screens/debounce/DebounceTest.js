import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import {arun} from 'lodash/debounce';

const DebounceTest = props => {
  function myFunction() {
    alert('hiii');
  }
  const handleClick = () => {
    // console.log(gfg);
    // debouncedFunction();
    // gfg();
    // console.log(bound_fun(' kaise ho'));
  // console.log(  func1())
  // console.log("Addition is :",
  //   gfgFunc ('age1','age2','age3','age4'));
  // console.log(
  //   gfg("Kaise ho",
  //       "Hello")
  // );

  // console.log(sum(7))
  console.log(
    arun.filter([4, 6, 10, 15, 18], 
    arun.negate(number))
  );
};
  // const debouncedFunction = after(myFunction, 2,
  //     );
  // const arun = require('lodash');
  //   var gfg = arun.after(7, function () {
  //     console.log('Saved');
  // });
  const arun = require('lodash');
  //   var gfg = arun.before(3, function () {
  //     console.log('Saved');
  // });

  // var gfg =arun.map(['6', '1', '10','12','144','9','66'],
  //         arun.ary(parseInt, 2));
  // function square(key1) {
  //   return key1;
  // }
  // var gfg = arun.map(
  //   [{key1: 'value1'}, {key1: 'obj2'}, {key1: 'obj3'}, {key1: 'obj4'}],
  //   square,
  // );

  // var users = [
  //   { 'user': 'barney' ,name:'Arun_Yagik'},
  //   { 'user': 'fred',name:'Tushar Yadav' }
  // ];

  // // The `_.property` iteratee shorthand.
  // var systum= arun.map(users, 'name');
  // var frrr = function () {
  //   return `CompalnyName:${this.company},EmployeeName:${this.employee},Mobile:${this.contact}`;
  // };
  // var func = arun.bind(frrr, {
  //   company: 'Plus91labs',
  //   employee: 'Arun Yagik',
  //   contact: '7985109164',
  // });
  // var func1 = arun.bind(frrr, {
  //   company: 'Wipro',
  //   employee: 'Sumit gupta',
  //   contact: '8400561656',
  // });
  // var obj = {
  //   'author': 'Arun',
  //   'welcome': function(greet, mark) {
      
  //     return greet + ' ' + this.author + mark;
  //   }
  // };
  // var bound_fun =
  // arun.bindKey(obj, 'welcome', 'Hello');

//   function fun(a, b, c, d){
//     return arguments;
// }
// var gfgFunc = arun.curry(fun,false);
// function Func(a, b) { 
  // console.log('AAAAAAAAAAAAAAAAAA',a)
  // console.log('BBBBBBBBBBBBBBBBBB',b)
  // return a + " Arun " + b;
// } 
// var gfg = arun.flip(Func); 

// const sum=arun.memoize(function(n){
//   return n<1?n:n+sum(n-1)
// })

function number(n) {
  return n % 5 == 0;
}

  return (
    <TouchableOpacity
      onPress={() => {
        handleClick();
      }}>
      <Text style={{alignSelf: 'center', justifyContent: 'center'}}>
    Click Me
      </Text>
    </TouchableOpacity>
  );
};

export default DebounceTest;
