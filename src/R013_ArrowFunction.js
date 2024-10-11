import React, { Component } from "react";

class R013_ArrowFunction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrowFuc: 'React200',
      num: 3
    };
  }



  /* Function 1 ~ 5 까지 함수를 순서대로 호출한다. */
  componentDidMount() {

    Function1(1);
    this.Function2(1, 1);
    this.Function3();
    this.Function4();
    this.Function5(0, 2, 3);

    // 함수를 호출 할 때 전달받은 num1 변수를 함수 내부에서 사용 가능함.
    function Function1(num1) {
      return console.log(num1 + '.Es5 Funtion');
    }
  }

  // 함수를 화살표로 선언.
  // this로 컴포넌트의 state 변수에 접근해 사용 가능함.
  Function2 = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(num3 + '.Arrow Function : ' + this.state.arrowFuc);
  }

  // 콜백함수 내부에서는 컴포넌트에 this로 접근 불가능함.
  //  - 콜백 함수 내부에서 this는 window 객체이기 때문에 
  //  - this로 state 변수에 접근하면 undefined에러가 발생함.
  // 그래서 접근할 수 있는 변수에 this를 백업한다.
  // 백업된 변수인 this_blind를 이용해 컴포넌트의 state 변수에 접근 가능함.
  Function3() {
    var this_bind = this;
    setTimeout(function () {
      console.log(this_bind.state.num + '. Es5 Callback Function noBind :');
      console.log(this.state.arrowFuc);
    }, 100);
  }


  Function4() {
    setTimeout(function () {
      console.log('4. Es5 Callback Function bind : ' + this.state.arrowFuc);
    }.bind(this), 100);
  }

  // 화살표 함수는 this를 blind 처리해주지 않아도 this를 컴포넌트로 사용해 state 변수에 접근 가능함
  Function5 = (num1, num2, num3) => {
    const num4 = num1 + num2 + num3;
    setTimeout(() => {
      console.log(num4 + '. Arrow Callback Function : ' + this.state.arrowFuc);
    }, 100);
  }

  render() {
    return (
      <h2>[THIS IS ARROW FUNCTION]</h2>
    )
  }
}

export default R013_ArrowFunction;

/* 
  화살표 함수는 function 대신 => 문자열을 사용하여 return 문자열을 생략 가능함.
  콜백함수에서 this를 blind 해야 하는 문제도 발생하지 않음.
*/