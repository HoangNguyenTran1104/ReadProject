import {GET_CALENDAR_REQUEST,
     GET_CALENDAR_SUCCESS,
     GET_CALENDAR_FAILED}
     from './constant'

import Axios from 'axios'



export const GetListCalendarAPI = () =>{
    return dispatch =>{
        dispatch(GetListCalendarRequest() )
        Axios({
            method: 'GET',
            url:'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
            

        })
        .then(result =>{
            dispatch(GetListCalendarSuccess(result.data))
            console.log("list learn from action",result.data)
            console.log(12345)
        })
        .catch(err =>{
            dispatch(GetListCalendarFailed(err))
        })
    }
}

export const GetListCalendarRequest = () =>{
    return {
        type: GET_CALENDAR_REQUEST
    }
}

export const GetListCalendarSuccess = data =>{
    return {
        type: GET_CALENDAR_SUCCESS,
        data
    }
}

export const GetListCalendarFailed = err =>{
    return {
        type: GET_CALENDAR_FAILED,
        err
    }
}

// export const remoteData = new DataManager({
//     url:'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
//     adaptor: new WebApiAdaptor,
//     crossDomain: true
// })