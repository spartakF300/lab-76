import {axiosApi} from "../../axiosApi";

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const request = ()=>{
  return {type:REQUEST_START}
};
export const requestError = (err)=>{
    return {type:REQUEST_ERROR,err}
};
export const requestSuccess = (data)=>{
  return {type:REQUEST_SUCCESS,data}
};
export const postMessage = (data)=>{
  return async (dispatch)=>{
      try {
          dispatch(request());
          await axiosApi.post('messages',data);
      } catch (e) {
          dispatch(requestError(e))

      }
  }
};
export const getMessage = ()=>{
    return async (dispatch,getState)=>{
        let url = 'messages';
        const dateTime = getState().dateTime;
        if (dateTime){
           url+=`?datetime=${dateTime}`
        }
        try {
            dispatch(request());
        const response = await  axiosApi.get(url);
            console.log(response.data);
            dispatch(requestSuccess(response.data))

        } catch (e) {
            dispatch(requestError(e))
        }
    }

};