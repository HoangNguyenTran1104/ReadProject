import {POST_SIGN_IN_REQUEST,
    POST_SIGN_IN_SUCCESS,
    POST_SIGN_IN_FAILED} 
    from './constant'
    
    let initialState ={
        user: {},
        userLoading: false,
        userErr:null
    }

    const userReducer = (state = initialState, action) =>{
        switch(action.type){
            case POST_SIGN_IN_REQUEST:{
                state.user = {}
                state.userLoading = true
                state.userErr = null
                return {...state}
            }

            case POST_SIGN_IN_SUCCESS:{
                state.user = action.data
                state.userLoading = false
                state.userErr = null
                return {...state}
            }

            case POST_SIGN_IN_FAILED:{
                state.user = {}
                state.userLoading = false
                state.userErr = action.err
                return {...state}
            }


            default: 
            return {...state}
        }
    }

    export default userReducer