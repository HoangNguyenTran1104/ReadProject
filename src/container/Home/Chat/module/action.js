import {GET_LIST_USER_REQUEST,
GET_LIST_USER_SUCCESS,
GET_LIST_USER_FAILED} 
from './constaint'

import Axios from "axios"


export const GetListUserAPI = () =>{
    return dispatch =>{
        dispatch(GetListUserRequest() )
        Axios({
            method:'GET',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01'

        })
        .then(result =>{
            dispatch(GetListUserSuccess(result.data))
            console.log("123a",result.data)
        })
        .catch(err =>{
            dispatch(GetListUserFailed(err))
        })
    }
}

export const GetListUserRequest = () =>{
    return {
        type:GET_LIST_USER_REQUEST
    }
}

export const GetListUserSuccess = data =>{
    return {
        type:GET_LIST_USER_SUCCESS,
        data
    }
}

export const GetListUserFailed = err =>{
    return {
        type:GET_LIST_USER_FAILED,
        err
    }
}