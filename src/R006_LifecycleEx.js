import React, { Component } from "react";

class R006_LifecycleEx extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps Call :' +props.prop_value);
    return {};

  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log('1. constructor Call');
  }

  render() {
    console.log('3. render Call');
    return (
      <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
    )
  }
}

export default R006_LifecycleEx

// getDerivedStateFromProps(props, state) 함수는 constructor() 함수 다음으로 실행된다.
/* 
 컴포넌트가 새로운 props를 받게 되었을 떄 state를 변경해준다.
 App.js에서 전달한 prop_value 라는 변수를 props.prop_value로 접근해 값을 가져올 수 있다.


*/

/* 콘솔창
1. constructor Call
-> 가장 먼저, 한번만 실행되는 constructor(props)함수
R006_LifecycleEx.js:5 2. getDerivedStateFromProps Call :FromApp.js
-> constructor 다음으로 실행되는 getDerivedStateFromProps(props, state)함수
R006_LifecycleEx.js:16 3. render Call
-> 마지막으로 작성한 render함수

*/