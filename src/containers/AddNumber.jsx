import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

function mapReduxDispatchToReactProps(dispatch){  // 첫번째 인자로 store.dispatch가 공급됨.!!!
  // dispatch 함수를 자식 컴포넌트의 props로 보낼 때
  return {
    onClick:function(size) {
            dispatch({ //바로 dispatch 사용 가능
              type:'INCREMENT',
              size:size
            })
          }
  }
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);


// 기존 코드
// import store from "../store";
// // 컴포넌트 파일이랑 컨테이너 파일을 따로 분리해줘야만 가능함.. 엄청 헤맸음.
// //container component - 리덕스랑 일은 얘가 함. AddNumber는 화면에 표시하는 역할만 하는 presentational component가 된다.
// // 리덕스와 관련된 일은 AddNumber를 래핑하는 가짜 container 컴포넌트가 가져감.
// export default function () {
//     return <AddNumber onClick={function(size) {
//       store.dispatch({
//         type:'INCREMENT',
//         size:size
//       })
//     }}></AddNumber>
// }

// 공식문서
// // connect() is a function that injects Redux-related props into your component.
// // You can inject data and callbacks that change that data by dispatching actions.
// function connect(mapStateToProps, mapDispatchToProps) {
//   // It lets us inject component as the last step so people can use it as a decorator.
//   // Generally you don't need to worry about it.
//   return function (WrappedComponent) {
//     // It returns a component
//     return class extends React.Component {
//       render() {
//         return (
//           // that renders your component
//           <WrappedComponent
//             {/* with its props  */}
//             {...this.props}
//             {/* and additional props calculated from Redux store */}
//             {...mapStateToProps(store.getState(), this.props)}
//             {...mapDispatchToProps(store.dispatch, this.props)}
//           />
//         )
//       }