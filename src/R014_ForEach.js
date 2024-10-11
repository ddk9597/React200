/* forEach() 함수
  
  배열함수임
  
  for 문에서 사용하던 순번과 배열의 크기 변수를 사용하지 않음

  배열의 처음부터 마지막까지 반복하는 경우 forEach()문을 사용하는것이 간편함.

  특정 순번에서만 배열 값을 추출하는 경우라면 for 문을 사용한다.

*/

import React, {Component} from "react";

class R014_ForEach extends Component {

  // 가장 마지막에 실행(compo)
  componentDidMount(){
    var For_arr = [3,2,8,8];
    var For_newArr = [];

    // for문에서 순번 변수(i)와 배열의 크기(For_Arr.length)가 필요하다.
    // .push : 반복문 조건이 완료될 때 까지 새로운 함수에 기존의 함수 값을 넣는다.
    for (var i = 0 ; i < For_arr.length ; i ++){
      For_newArr.push(For_arr[i]);
    }
    console.log("1. For_newArr : [" + For_newArr + "]");

    var ForEach_Arr = [3,3,9,8];
    var ForEach_newArr = [];
    // forEach 함수에스는 순번과 배열의 크기 정보를 이용하지 않음.
    // 0부터 배열의 크기만큼 반복함
    // 반복문이 실행될 때 마다 콜백 함수로 결괏값을 받아 새로운 함수에 넣는다.
    ForEach_Arr.forEach((result) => { 
      ForEach_newArr.push(result);
    })
    console.log("2. ForEach_newArr : [" + ForEach_newArr + "]");
  }

  render() {
    return (
      <h2>[THIS IS FOREACH]</h2>
    )
  }

}

export default R014_ForEach;