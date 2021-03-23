import { GET_LIST_ACOUNT_REQUEST ,
    GET_LIST_ACOUNT_SUCCESS ,
    GET_LIST_ACOUNT_FAILED,}
    from "./constants"

import Axios from "axios"


    export const GetListAccountTaskAPI = () => {
        return dispatch  =>{
            dispatch(GetListAccountRequest())
            Axios({
                method: 'GET',
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01'
            })
            .then(result =>{
                dispatch(GetListAccountSuccess(result.data))
                console.log("data from action ", result.data)
            })
            .catch(err =>{
                dispatch(GetListAccountRequest(err))
                console.log(err)
            })
        }
    }


    export const GetListAccountRequest = () =>{
        return {
            type: GET_LIST_ACOUNT_REQUEST
        }
    }

    export const GetListAccountSuccess = data =>{
        return {
            type: GET_LIST_ACOUNT_SUCCESS,
            data
        }
    }

    export const GetListAccountFaild= err =>{
        return {
            type: GET_LIST_ACOUNT_FAILED,
            err
        }
    }