import React, { Component } from 'react'
import './CSS/index.css'
import videoClass from './video/uef.mp4'

import Button from '@material-ui/core/Button';
import imgUEF from "./img/uef.jpg"


import {PostSignInAPI} from './module/action'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

 class SignIn extends Component {
    constructor(props){
        super(props)
        this.state={
            user:{
                taiKhoan:"",
                matKhau:"",
            },
            listUser:[]
        }
    }

    HandleOnchange = e=>{
        const{name,value} = e.target
        this.setState({
            user:{...this.state.user, [name]:value}
        })
        console.log(name,value)
    }

    HandleOnSubmit = e =>{
        e.preventDefault();
        console.log("1234",this.state)
        this.props.PostSignIn(this.state.user, this.props.history)
        
        
    }

    ErrorSignIn = () =>{
        const userErr = this.props
        console.log(userErr)
        if(userErr){
            return(
                alert("Tài khoản hoặc mật khẩu sai!")
            )
        
        }
    }



// NOTE: ata-backdrop="false" is delete class modal-backdrop fade of bootstrap create when use modal to login
    render() {
        return (

           <div className="SignIn_Container">
               {/* left */}
               <div className="SignIn_Left">
                    <img src={imgUEF}  id="imgUEF"/>
               </div>

               {/* right */}
               <div className="SignIn_Right">
                   <div className="SignIn_Icon">
                       <h2>Sign In</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                        <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>
                   </div>
                    {/* form */}
                    <form onSubmit={this.HandleOnSubmit}>
                    <TextField id="taiKhoan" label="Tài khoản*" type="text" name="taiKhoan" value={this.state.user.taiKhoan} onChange={this.HandleOnchange} autoComplete="current-password" variant="outlined" /><br/>
                    <TextField id="matKhau" label="Mật khẩu*" type="password" name="matKhau" value={this.state.user.matKhau} onChange={this.HandleOnchange} autoComplete="current-password" variant="outlined"/>

                    <FormControlLabel name="remmember" value="false" control={<Checkbox color="primary" />} label="Remember me" /><br/>
                    
                    <Button type="submit" variant="contained" color="primary"  >Sign In</Button>
                    
                    </form>
                   
               </div>
           </div>   
        )
    }
}

const mapStateToProp = state =>{
    return{
        userErr: state.userReducer.userErr
    }
}

const mapDispatchToProp = dispatch =>{
    return{
        PostSignIn: (user,history) =>{
            dispatch(PostSignInAPI(user,history))
        }
    }
}


export default connect(mapStateToProp,mapDispatchToProp)(SignIn )




//  <div className="SignIn">
                
// <video src={videoClass} autoPlay loop muted />
// <div className="SignIn_container">
//     <button id="getStarted" data-toggle="modal" data-target="#exampleModal">GET STARTED</button>

//     {/* MODAL */}
// <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
// <div className="modal-dialog">
//     <div className="modal-content">
//     <div className="modal-header ">
//         {/* <h5 className="modal-title " id="exampleModalLabel">Đăng nhập</h5> */}
//         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//         <span aria-hidden="true">×</span>
//         </button>
//     </div>
//     <h5 className="text-center my-2">Đăng nhập</h5>
//     <form onSubmit={this.HandleOnSubmit}>
//     <div className="modal-body row mx-auto">
        

//         {/* userName */}
//         <div className="input-group mb-3">
//         <div className="input-group-prepend">
//             <span className="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
//         </div>
//         <input type="taiKhoan" name="taiKhoan" value={this.state.user.taiKhoan} onChange={this.HandleOnchange} className="form-control" placeholder="email"  />
//         </div>

//         {/* Password */}
//         <div className="input-group mb-3">
//         <div className="input-group-prepend">
//             <span className="input-group-text" id="basic-addon2"><i className="fa fa-lock"></i></span>
//         </div>
//         <input type="password" name="matKhau" value={this.state.user.matKhau} onChange={this.HandleOnchange}  className="form-control" placeholder="Password"  />
//         </div>
        
//         <Button className="mx-auto" type="submit" variant="contained" color="primary" >Sign In</Button>
//         {/* {this.ErrorSignIn} */}
//     </div>
//     </form>

//     </div>
// </div>
// </div>

// </div>
// </div> 