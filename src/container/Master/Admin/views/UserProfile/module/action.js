import {GET_LIST_USER_REQUEST,
    GET_LIST_USER_SUCCESS ,
    GET_LIST_USER_FAILED} 
    from "./constant"

import Axios from "axios"

export const GetListUserAPI = () =>{
    return dispatch  =>{
        dispatch(GetListUserRequest())
        Axios({
            method:"GET",
            url:'http://localhost:8888/api/user/all'
        }) 
        .then(result =>{
            dispatch(GetListUserSuccess(result.data))
            console.log("list user in action",result.data)
        })
        .catch(err =>{
            GetListUserFailed(err)
        })
    }
}

export const GetListUserRequest = () =>{
    return{
       type: GET_LIST_USER_REQUEST
    }
}

export const GetListUserSuccess = data =>{
    return{
       type: GET_LIST_USER_SUCCESS,
       data
    }
}

export const GetListUserFailed = err =>{
    return{
       type: GET_LIST_USER_FAILED,
       err
    }
}