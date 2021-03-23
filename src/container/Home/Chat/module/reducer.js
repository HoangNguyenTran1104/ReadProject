import {GET_LIST_USER_REQUEST,
    GET_LIST_USER_SUCCESS,
    GET_LIST_USER_FAILED} 
    from './constaint'

    
    let initialState = {
        listUser:[],
        listUserLoading:false,
        listUserErr:null
    }

    const listUserReducer = (state  = initialState,action)=>{
        switch(action.type){

            case GET_LIST_USER_REQUEST:{
                state.listUser = []
                state.listUserLoading = true
                state.listUserErr = null 
                return {...state}
            }

            case GET_LIST_USER_SUCCESS:{
                state.listUser = action.data
                state.listUserLoading = false
                state.listUserErr = null 
                return {...state}
            }

            case GET_LIST_USER_REQUEST:{
                state.listUser = []
                state.listUserLoading = false
                state.listUserErr = action.err
                return {...state}
            }

            default:
                return {...state}
        }
    }

    export default listUserReducer