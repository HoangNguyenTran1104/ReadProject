import {POST_SIGN_IN_REQUEST,
POST_SIGN_IN_SUCCESS,
POST_SIGN_IN_FAILED} 
from './constant'

import Axios from 'axios'



export const PostSignInAPI = (user,history) =>{
    return dispatch =>{
        dispatch(PostSignInRequest())
        Axios({
            method:'POST',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data:user
        })
        .then(result =>{
            dispatch(PostSignInSuccess(result.data))
            history.push("/home/home")
            console.log("12345",result.data)
            localStorage.setItem("user",JSON.stringify(result.data.hoTen))
            localStorage.setItem("accessToken",JSON.stringify(result.data.accessToken))

        })
        .catch(err =>{
            dispatch(PostSignInFalied(err))
           return(
            alert("Tài khoản hoặc mật khẩu sai!")
            )
           
        })
    }
}

export const PostSignInRequest = () =>{
    return{
        type:POST_SIGN_IN_REQUEST
    }
}

export const PostSignInSuccess = data =>{
    return{
        type:POST_SIGN_IN_SUCCESS,
        data
    }
}

export const PostSignInFalied = err =>{
    return{
        type:POST_SIGN_IN_FAILED,
        err
    }
}