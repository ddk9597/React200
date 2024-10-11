/* map()
  배열함수
  forEach()와 마찬가지로 for문에서 사용하던 순번과 배열의 크기 변수를 사용하지 않음
  forEach()와 달리 return을 사용해 반환 값을 받을 수 있다.
*/


import React, { Component } from 'react';


/* 
  기존 배열(Map_Arr)에서 map()함수를 사용해 순서대로 하나씩 요소에 접근해 가져옴
  이때마다 콜백함수가 실행됨
  가져운 값을 변수 x에 넣고 그대로 반환(x=>x) 순서대로 쌓는다.
  마지막 요소까지 반복했다면 한 번에 새로운 배열(Map_newArr)에 저장한다.
*/
class R015_Map extends Component {

  componentDidMount() {
    // 기존 배열 Map_Arr 생성
    var Map_Arr = [3, 2, 8, 8,]
    let Map_newArr = Map_Arr.map(x => x);
    console.log("1. Map_newArr : [ " + Map_newArr + " ]")


    // 기존 배열에 접근해 각 요소에 2를 곱해
    // 새로운 배열에 설정(Map_multiArr)
    let Map_multiArr = Map_Arr.map(x => x * 2)
    console.log("2. Map_multiArr : [ " + Map_multiArr + " ]")

    // 배열 안에 객체 생성
    var ObjArray = [{ key: 'react', value: '200' },
    { key: '리액트', value: 'thowHundred' },];
    
    // 배열 안의 객체를 순서대로 가져와 콜백함수를 실행
    // 가져온 값을 obj라는 변수에 저장한다.
    // 콜백 함수의 두 번째 인자인 index는 기존 배열의 인덱스와 동일함
    let Map_objArr = ObjArray.map((obj, index) => {
      // 기존 배열에서 가져온 객체 값을 순서대로 출력함
      console.log((index + 3) + ". obj : " + JSON.stringify(obj))
      var Obj = {};
      Obj[obj.key] = obj.value;
      return Obj;
    });
    console.log("5. Map_objArr : " + JSON.stringify(Map_objArr));
  }

  render() {
    return (
      <h2>[THIS IS MAP]</h2>
    )
  }
}

export default R015_Map;  