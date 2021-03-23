import {POST_SIGN_UP_REQUEST,
    POST_SIGN_UP_SUCCESS,
    POST_SIGN_UP_FAILED} 
    from './constant'
import Axios from 'axios'

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"



export const PostSignUpAPI = userSignUp =>{
    const  db = firebase.firestore()
    return  dispatch =>{
        dispatch(PostSignUpRequest())
        firebase.auth().createUserWithEmailAndPassword(userSignUp.email, userSignUp.password)
        .then((userSignUp) => {
          dispatch(PostSignUpSuccess(userSignUp))
        })
        db.collection("collectUser").add({
            fullName: userSignUp.email,
            createdAt: new Date(),
            isOnline:true
        
        })


        .catch((err) => {
          var errorCode = err.code;
          var errorMessage = err.message;
          console.log(errorCode)
          console.log(errorMessage)
          dispatch(PostSignUpFailed(err))
        });
    }
}


// export const PostSignUpAPI = (user) => {

//     return async (dispatch) => {

//         dispatch(PostSignUpRequest())

//         firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//             .then(() => {
//                 //if you are here means it is updated successfully
//                 firebase.firestore.CollectionReference('users')
//                 .doc(user.uid)
//                 .set({
                    
//                     createdAt: new Date(),
//                     isOnline: true
//                 })
//                 .then(() => {
//                     //succeful
//                     const loggedInUser = {
                       
//                         email: user.email
//                     }
//                     localStorage.setItem('user', JSON.stringify(loggedInUser));
//                     console.log('User logged in successfully...!');
//                     dispatch(PostSignUpSuccess(loggedInUser))
//                 })
//                 .catch(error => {
//                     console.log(error);
//                     dispatch(PostSignUpFailed(error));
//                 });
//             })
//         .catch(error => {
//             console.log(error);
//             let errorCode = error.code;
//             let errorMessage = error.message;
//             console.log(errorCode)
//             console(errorMessage)
//         })


//     }


// }



export const PostSignUpRequest = () =>{
    return {
        type:POST_SIGN_UP_REQUEST
    }
}


export const PostSignUpSuccess = userSignUp =>{
    return {
        type:POST_SIGN_UP_SUCCESS,
        userSignUp
       
    }
}

export const PostSignUpFailed = err =>{
    return {
        type:POST_SIGN_UP_FAILED,
        err
    }
}

