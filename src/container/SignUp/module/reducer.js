import {POST_SIGN_UP_REQUEST,
POST_SIGN_UP_SUCCESS,
POST_SIGN_UP_FAILED} 
from './constant'

let initialState ={
    userSignUp:{},
    userSignUpLoading: false,
    userSignUpErr: null
}

 const userSignUpReducer = (state = initialState, action) =>{
    switch(action.type){

        case POST_SIGN_UP_REQUEST:{
            state.userSignUp = {}
            state.userSignUpLoading = true
            state.userSignUpErr = null
            return {...state}
        }


        case POST_SIGN_UP_SUCCESS:{
            state.userSignUp = action.data
            state.userSignUpLoading = false
            state.userSignUpErr = null
            return {...state}
        }


        case POST_SIGN_UP_FAILED:{
            state.userSignUp = {}
            state.userSignUpLoading = false
            state.userSignUpErr = action.data
            return {...state}
        }

        default:
            return {...state}
    }
}

export default userSignUpReducer