/* jquery */

/* 
  자바스크립트 라이브러리.
  이벤트 처리, 애니메이션 등 자바스크립트의 기능을 간단하고 빠르게 구현
*/

import React, {Component} from "react";
/* $ : jquery를 사용할 때에는 $기호를 붙여서 사용한다. */
import $ from "jquery";


class R016_jquery extends Component {

  // 클릭 시 입력 값을 alert로 출력하는 함수
  input_alert = (e) => {
    var inputVal = $('#inputId').val();
    alert(inputVal);
  }



  // onClick => 클릭 시 지정한 함수 실행
  render() {
    return (
      <div>
        <h2>[THIS IS JQUERY]</h2>
        <input id = "inputId" name = "inputName"/>
        <button id="buttonId" onClick={e => this.input_alert(e)}>JqueryButton</button>
      </div>
    )
  }
}

export default R016_jquery;