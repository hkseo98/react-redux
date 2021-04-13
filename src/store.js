import { createStore } from 'redux';

export default createStore(function(state, action){
    if(state === undefined) {
        return { number:0}
    }
    if(action.type === 'INCREMENT') {
        // ...state = state값 복사해서 리턴해줌.
        return {...state, number:state.number + action.size }
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
