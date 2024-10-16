import React, { Component } from "react";

class R007_LifecycleEx extends Component {

  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps Call :' +props.prop_value);
    return {tmp_state:props.prop_value};
  }

  constructor(props) {
    super(props);
    this.state ={};
    console.log('1. constructor Call');
  }

  componentDidMount() {
    console.log('4. componentDidMount Call');
    console.log('tmp_state :'+this.state.tmp_state);
  }

  render() {
    console.log('3. render Call');
    return (
      <h2>[THIS IS COMPONENTDIDMOUNT FUNCTION]</h2>
    )
  }

}

export default R007_LifecycleEx


/* 
  componentDidMount() 함수는 가장 마지막으로 실행된다.
  render()함수가 return되는 html 형식의 코드를 화면에 그려준 후 실행된다.
  화면에 모두 그려진 후에 실행돼야 하는 이벤트 처리, 초기화 등 가장 많이 활용된다.


  순서
  constructor() : 맨 처음 한번만.
  getDerivedStateFromProps(props, state) : constructor 함수 다음으로 실행
  render()
  componentDidMount() : 가장 마지막에 실행(컴포넌트가 처음 화면에 렌더링 된 후 한번만 실행)
*/