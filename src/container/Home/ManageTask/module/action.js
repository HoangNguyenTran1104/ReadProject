import { GET_LIST_MANAGE_TASK_REQUEST ,
    GET_LIST_MANAGE_TASK_SUCCESS ,
    GET_LIST_MANAGE_TASK_FAILED,}
    from "./constants"

import Axios from "axios"


    export const GetListManageTaskAPI = () => {
        return dispatch  =>{
            dispatch(GetListManageTaskRequest())
            Axios({
                method: 'GET',
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01'
            })
            .then(result =>{
                dispatch(GetListManageTaskSuccess(result.data))
                console.log("data from action ", result.data)
            })
            .catch(err =>{
                dispatch(GetListManageTaskFaild(err))
                console.log(err)
            })
        }
    }


    export const GetListManageTaskRequest = () =>{
        return {
            type: GET_LIST_MANAGE_TASK_REQUEST
        }
    }

    export const GetListManageTaskSuccess = data =>{
        return {
            type: GET_LIST_MANAGE_TASK_SUCCESS,
            data
        }
    }

    export const GetListManageTaskFaild= err =>{
        return {
            type: GET_LIST_MANAGE_TASK_FAILED,
            err
        }
    }