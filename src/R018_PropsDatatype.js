/* 
  자식 컴포넌트에서 props 에 대한 자료형을 선언해 놓으면 
  부모 컴포넌트에서 넘어오는 props 변수들의 자료형과 비교한다.
  이때 자료형이 일치하지 않는다면
  경고메시지로 알려준다.
*/

import React, { Component } from 'react';
import datatype from 'prop-types';

class PropsDatatype extends Component {

  render() {
    // render()함수 내에서 지역변수를 선언하여
    // props로 전달된 값들을 할당한다.
    let {
      String, Number, Boolean, Array, ObjectJson, Function
    } = this.props;
    return (
      <div
        style={{ padding: '0px' }}>

        <p>String Props : {String}</p>
        <p>Number Porps : {Number}</p>
        <span>Boolean Props : {Boolean.toString()}</span>
        <p>Array Props : {Array.toString()}</p>

        <p>ObjectJson Props : {JSON.stringify(ObjectJson)}</p>
        <p>Function Props : {Function}</p>

      </div>
    )

  }
}

/* props 값들 각각에 적합한 자료형을 선언함. */
PropsDatatype.propTypes = {
  String : datatype.string,
  Number : datatype.number,
  Boolean : datatype.bool,
  Array : datatype.array,
  ObjectJson : datatype.object,
Function : datatype.func,
};

export default PropsDatatype;