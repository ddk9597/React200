/* Props
  부모 컴포넌트가 자식 컴포넌트에 데이터를 전달 할 때 사용함
  전달된 데이터는 읽기 전용임
  props를 전달받은 자식 컴포넌트는 오버라이딩 불가(데이터 수정 불가함)

  데이터를 변경하기 위해서는 컴포넌트 내부에서만 
  사용하는 변수에 값을 넣어서 사용해야 함.
*/

import React, { Component } from "react";

class Props extends Component {

  render() {
    // this.props. 뒤에 상위 컴포넌트에서 전달 받은 props 변수명을 붙이면
    // 해당 데이터를 사용 가능함
    let props_value = this.props.props_val;

    // 데이터를 수정해야 할 경우, porps 자체가 아닌 컴포넌트 내부 변수(props)value)에 
    // 옮겨 가공한다.
    // App.js에서 넘겨받은 문자열(THIS IS PROPS) 뒤에 새로운 문자열
    // props_value 를 덧붙인다.
    props_value += ' from App.js'
    return (
      <div>{props_value}</div>
    )
  }

}

export default Props;
