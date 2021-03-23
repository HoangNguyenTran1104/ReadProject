import { 
    GET_LIST_ACOUNT_REQUEST,
    GET_LIST_ACOUNT_SUCCESS, 
    GET_LIST_ACOUNT_FAILED}
    from "./constants"

    let initialState = {
        listAccount: [],
        listAccountLoading: false,
        listAccountErr: null
    }

    const listAccountReducer = (state = initialState, action) => {
        switch(action.type){

            case GET_LIST_ACOUNT_REQUEST :{
                state.listAccount = []
                state.listAccountLoading = true
                state.listAccountErr = null

                return{...state}
            }

            case GET_LIST_ACOUNT_SUCCESS :{
                state.listAccount = action.data
                state.listAccountLoading = false
                state.listAccountErr = null

                return{...state}
            }

            case GET_LIST_ACOUNT_FAILED :{
                state.listAccount = []
                state.listAccountLoading = false
                state.listAccountErr = action.err

                return{...state}
            }

            default:
            return {...state}
        }
    }

    export default listAccountReducer