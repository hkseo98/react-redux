import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

function mapReduxStateToReactProps(state){ // redux의 state값이 바뀔때마다 호출됨
    // state값을 자식 컴포넌트의 props로 보낼 때 
    return {
      number:state.number
    }
  } // 기존 코드에서 number 값이 바꿜때마다 redux의 state를 받아와서 새로 화면에 표시해주는 과정에 해당
  
export default connect(mapReduxStateToReactProps)(DisplayNumber);
// import store from '../store';
// import { useState, useEffect } from 'react';

// export default function() {
//     let [number, setNumber] = useState(0)
//     useEffect(function() {
//       store.subscribe(function () {
//         setNumber(store.getState().number) // dispatch 발생시 수행됨.
//       })
//     }, [number])
//     return <DisplayNumber number={number}></DisplayNumber>
// }