import React, { Component } from "react";


/* 함수를 객체로 사용하기 */
class ClassPrototype extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {

    // Es5 prototype
    var ExamCountFunc = (function () {
      function ExamCount(num) {
        this.number = num;
      }

      // 생성자 함수명.prototype.함수명 형태로 선언해주면
      // 객체 외부에서 함수(cnt.showNum();)을 실행해 객체 내부에 선언된 함수로 사용할 수 있음.
      // 함수가 실행되면 생성자 함수에서 '200'으로 할당된 객체 변수 number를 사용한다.
      ExamCount.prototype.showNum = function () {
        console.log('1. react_' + this.number);
      };
      return ExamCount;
    }());

    // ExamCountFunc()함수(객체)를 실행한 후 return 되는 결괏값(객체)를 cnt 라는 변수에 저장
    var cnt = new ExamCountFunc('200');
    // 객체 안에 선언된 showNum()함수 실행
    cnt.showNum();

    // Es6는 객체를 class로 선언함.
    // Es6 class
    // ExamCountClass 생성
    class ExamCountClass {
      constructor(num2) {
        this.number2 = num2;
      }
      showNum() {
        console.log('2.react_' + this.number2);
      }
      // 객체에 접근할 때 실행할 함수(showNum)은 class의 {}괄호(scope) 안에 선언 가능.
      // 함수가 실행되면 생성자 함수에서 '2hundred'으로 할당된 객체 변수 number2를 사용한다.
      showNum() {
        console.log(`2.react+${this.number2}`);
      }
    }
    // ExamCountClassfmf cnt2 라는 변수에 저장함
    var cnt2 = new ExamCountClass('2hundred');
    // 객체 안에 선언된 showNum()함수 실행
    cnt2.showNum();
  }
  render() {
    return (
      <h2>[THIS IS CLASS]</h2>
    )
  }
}

export default ClassPrototype;



/* 
  자바스크립트는 함수를 객체로 사용 가능함
*/