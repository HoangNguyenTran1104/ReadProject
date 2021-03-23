import { 
    GET_LIST_MANAGE_TASK_SUCCESS ,
    GET_LIST_MANAGE_TASK_FAILED, 
    GET_LIST_MANAGE_TASK_REQUEST}
    from "./constants"

    let initialState = {
        listTask: [],
        listTaskLoading: false,
        listTaskErr: null
    }

    const listTaskReducer = (state = initialState, action) => {
        switch(action.type){

            case GET_LIST_MANAGE_TASK_REQUEST :{
                state.listTask = []
                state.listTaskLoading = true
                state.listTaskErr = null

                return{...state}
            }

            case GET_LIST_MANAGE_TASK_SUCCESS :{
                state.listTask = action.data
                state.listTaskLoading = false
                state.listTaskErr = null

                return{...state}
            }

            case GET_LIST_MANAGE_TASK_FAILED :{
                state.listTask = []
                state.listTaskLoading = false
                state.listTaskErr = action.err

                return{...state}
            }

            default:
            return {...state}
        }
    }

    export default listTaskReducer