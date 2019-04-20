import ActionType from './../actions/ActionType';
const initState = {count:0};

const counter = (state = initState, action) => {
    switch (action.type) {
      case ActionType.INCREMENT: return {...state,count:state.count+1};
      case ActionType.DECREMENT : return {...state,count:state.count-1};
      default:return state;
    }
}
  
export default counter;