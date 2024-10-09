import React, {Component} from "react";

// 전개 연산자 : 배열이나 객체 변수를 좀 더 직관직이고 편리하게 합치거나 추출할 수 있게 도와주는 문법.
// 변수 앞에 ...를 입력해 사용함.

class R011_SpreadOperator extends Component {
  
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    // js Array
    var varArray1 = ['num1','num2'];
    var varArray2 = ['num3','num4'];
    var sumVarArray = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
    // var sumVarArray = [].concat(varArray1, varArray2);
    console.log('1. sumVarArray : ' + sumVarArray);


    // Es6 Array
    let sumLetArray = [...varArray1, ...varArray2];
    console.log('2. sumLetArray : ' + sumLetArray);

    // sumLetArray의 0, 1 번 요소를 각각 sum1, sum2 로 할당. 나머지를 reamain 배열에 저장함.
    const [sum1, sum2, ...remain] = sumLetArray;
    console.log('3. sum1 : ' + sum1 + ' sum2 : ' + sum2 + ' remain : ' + remain);

    // --------------
    var varObj1 = {key1 : 'val1', key2 : 'val2'};
    var varObj2 = {key2 : 'new2', key3 : 'val3'};

    // js Object
    var sumVarObj = Object.assign(varObj1, varObj2);
    console.log('4. sumVarObj : ' + JSON.stringify(sumVarObj));

    // Es6 Object
    let sumLetObj = {...varObj1, ...varObj2};
    console.log('5. sumLetObj : ' + JSON.stringify(sumLetObj));
    var {key1, key3, ...others} = sumLetObj;
    console.log('6. key1 : ' + key1 + 'key3 : ' + key3 + 'others : ' + JSON.stringify(others));

  }

  render(){
    return (
      <h2>[THIS IS SPREADOPERATOR]</h2>
    )
  }

}

export default R011_SpreadOperator;