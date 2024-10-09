import React, { Component } from "react";

class R005_LifecycleEx extends Component {
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

export default R005_LifecycleEx

/* constructor 함수
  특징
    1. 생명주기 함수 중 가장 먼저 실행
    2. 처음 한번만 실행됨
  사용법
    1. component 내부에서 사용되는 변수(state)를 선언하고
    2. 부모 객체에서 전달받은 변수(prop)을 초기화 할 때 사용함
    3. super()함수는 가장 위에 호출해야 한다.
  */