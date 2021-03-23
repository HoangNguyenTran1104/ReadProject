import React, { Component } from 'react'
import {PostSignUpAPI } from './module/action'
import {connect} from 'react-redux'
import './CSS/index.css'

 class SignUp extends Component {
    constructor(props){
        super(props)
        this.state ={
            userSignUpVL: {
                taiKhoan:"",
                matKhau:"",
                email:"",
                class:"",
                soDt:"",
                hoTen:"",
                maLoaiNguoiDung:"",
            }   
        }
    }


    HandleEvent = e =>{
        const {name, value} = e.target
        this.setState({
            userSignUpVL:{...this.state.userSignUpVL, [name]:value}
        })
        console.log(name, value)
    }

    HandleSubmit = e =>{
        e.preventDefault();
        console.log(this.state.userSignUpVL)
        this.props.PostSignUp(this.state.userSignUpVL )
        
    }

    render() {
        return (
            <div className="SignUp_Container">
                <h3>Sign Up</h3>
                <form>

                </form>
            </div>
        )
    }
}

const mapDispatchToProp = disptach =>{
    return {
        PostSignUp:userSignUp =>{
            disptach(PostSignUpAPI(userSignUp))
            
        }
    }
}

export default connect(null,mapDispatchToProp) (SignUp)





/* <div className="container my-5">
<h3>Sign Up</h3>
<form className="mx-auto " onSubmit={this.HandleSubmit}>
<div className="form-row">

    <div className="form-group col-md-6">
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" value={this.state.userSignUpVL.email} onChange={this.HandleEvent}  className="form-control"  />
    </div>

    <div className="form-group col-md-6">
    <label htmlFor="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" value={this.state.userSignUpVL.password} onChange={this.HandleEvent}  className="form-control"  />
    </div>

</div>

<button type="submit" className="btn btn-primary">Sign up</button>
</form>

</div> */