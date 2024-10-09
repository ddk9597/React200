import React, {Component} from "react";

class R009_Es6 extends Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount(){
    var jsString1 = '자바 스크립트';
    var jsString2 = '입니다\n 다음 줄입니다. ';
    // 기존 Js에서 줄바꿈은 개행 문자(\n)을 이용했음
    console.log(jsString1 + '문자열' + jsString2);

    var Es6String1 = 'Es6';
    var Es6String2 = '입니다.';

    console.log(`${Es6String1} 문자열 ${Es6String2}
    _____다음 
    줄입니다.`);
      // Es6에서는 백틱 안에 코드 상에서 줄바꿈을 하면 개행 문자(\n)없이도 줄 바꿈 가능
    var LongString = "Es6에 추가된 String 함수들입니다.";
    console.log('startsWith : ' + LongString.startsWith("Es6에 추가"));
    console.log('endsWith : ' + LongString.endsWith("함수들입니다."));
    console.log('includes :'+ LongString.includes("추가된 String") );
  }
  
  render(){
    return(
      <h2>[THIS IS ES6 STRING]</h2>
    )
  }
}

export default R009_Es6;


/* 
  --- boolean type 문자열 찾는 함수 ---
  startWith() : 변수 앞에서부터
  endWith() : 위치 상관 없이
  includes() : 변수 뒤에서부터
  일치하는 문자열이 있는지 찾는다.
  

*/