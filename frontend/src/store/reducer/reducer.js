import {REQUEST_ERROR, REQUEST_START, REQUEST_SUCCESS} from "../actions/action";

const initialState ={
  messages:[],
  dateTime: null,
  loading:false,
    error: null
};
const reducer = (state = initialState,action)=>{
  switch (action.type) {
      case REQUEST_START:
          return{
              ...state,
              loading: true
          };
      case REQUEST_SUCCESS:
          if (action.data.length === 0){
              return {...state,loading: false,error: null}
          }
          return {
              ...state,
              messages: [...state.messages,...action.data],
              dateTime: action.data[action.data.length -1].dateTime,
              loading: false
          };
      case REQUEST_ERROR:
          return {
              ...state,
              loading: false,
              error: action.err
          };
      default: return state
  }
};
export default reducer;