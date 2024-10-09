import React, { Component } from "react";

class R008_LifecycleEx extends Component {

  // constructor(props)다음으로 실행되는 함수
  static getDerivedStateFromProps(props, state) {
    console.log(' 2. getDerivedStateFromProps :' + props.prop_value);
    return {tmp_state : props.prop_value};
  }

  // 맨 처음 한번만 실행되는 constructor(props)함수
  constructor(props){
    super(props);
    this.state = {};
    console.log('1. constructor Call');
  }

  // 생명주기 함수 중 가장 마지막에 실행되는 ComponentDidMount() 함수
  // 컴포넌트가 렌더링 된 후 한번만 실행됨
  componentDidMount(){
    console.log('4. componentDidMount Call');
    console.log('5. tmp_state :' + this.state.tmp_state);
    // boolean, tmp_state2 데이터 세팅 : 
    // setState({변수 이름 : 데이터 유형}) : 변수의 선언과 초기화를 동시에 한다. 
    this.setState({tmp_state2 : true});
  }

  // state의 변경이 발생함(setState()함수로 인해)
  // 변경 단계의 생명주기 함수 shouldComponentUpdate() 함수가 실행됨
  // shouldComponentUpdate() 함수는 boolean 데이터를 반환함.
  // -> 반환된 값이 true 일 경우 render 함수를 한 번 더 호출함
  shouldComponentUpdate(props, state){
    console.log('6. shouldComponentUpdate Call / tmp_state2 =' + state.tmp_state2);
    return state.tmp_state2;
  }

  render(){
    console.log('3. renderCall');
    return(
      <h2>[THIS IS shouldComponentUpdate FUNCTION]</h2>
    )
  }
}

export default R008_LifecycleEx;

/* !!
  shouldComponentUpdate() 함수는 함수의 반환 값이 true 인 경우
  render() 함수를 재실행 할 수 있다는 점에서
  props나 state 변수가 변경될 때 화면을 다시 그리며 제어 할 수 있다.

*/