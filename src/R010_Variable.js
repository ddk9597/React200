import React, {Component} from "react";

class R010_Variable extends Component{

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    var varName = 'react';
    console.log('varName1 :' + varName);
    var varName = '200';
    console.log('varName2 :' + varName);

    let letString = 'let';
    console.log('letString1 : ' + letString);
    // let letString = '200';
    // 이미 위에서 let을 이용해 동일한 이름의 변수를 생성했기에 불가능함.
    // 재선언은 불가하나 재할당은 가능하다.
    letString = 'react200';
    console.log('letString2 : ' + letString);

    const constName = 'react';
    console.log('constName :' + constName);
    // const constName -> const로 동일한 이름의 변수 중복 생성 불가.
    // constName = 'react200'; -> const로 정의된 변수는 변경 불가함. 컴파일 에러는 안나는데 런타임 에러가 나네
    console.log('constName :' + constName);
  }

  render(){
    return (
      <h2>[THIS IS VARIABLE]</h2>
    )
  }

}

export default R010_Variable;

/* 
  변수 선언에 사용되는 variables.
  var : 재선언, 재할당 모두 가능.
  let : 재선언 불가. 재할당 가능.
  const : 재선언, 재할당 모두 불가.

*/