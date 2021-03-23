import React, { Component } from 'react'
import './CSS/index.css'
import {connect} from "react-redux"
import {GetListUserAPI} from './module/action'
 class Chat extends Component {



    componentDidMount(){
        this.props.GetListUser()
    }

    GetListUser = () =>{
        const {listUser} = this.props
        console.log('123',listUser)
        if(listUser && listUser.length > 0){
            return listUser.map(item=>{
               return(
                <div className="displayName">
                <div className="displayPic">
                    <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt="" />
                </div>
                <div style={{display:'flex',flex:1,justifyContent:'space-between',margin: '0 10px'}}>
               <span style={{fontWeight: 500}}>{item.hoTen}</span>
                    <span>Online</span>
                </div>
            </div>
               ) 
            })
        }
    }

    renderHTML = () =>{
        const {listUser} = this.props
        console.log("1",listUser)
        return (
            <section className="container">
            <div className="listOfUsers">
        {/*  */}
            {this.GetListUser()}

{/*          */}
            </div>
            <div className="chatArea">
            <div className="chatHeader"> Rizwan Khan </div>
                <div className="messageSections">
        
                    <div style={{ textAlign: 'left' }}>
                        <p className="messageStyle" >Hello User</p>
                    </div>
        
                </div>
                <div className="chatControls">
                    <textarea />
                    <button>Send</button>
                </div>
            </div>
        </section>
        )
    }
    render() {
        return (
            <div className="">
                {this.renderHTML()}
            </div>
        )
    }
}

const mapStateToProp = state =>{
    return{
        listUser: state.listUserReducer.listUser
    }
}

const mapDispatchToProp = dispatch =>{
    return{
        GetListUser: () =>{
            dispatch(GetListUserAPI())
        }
    }
}


export default connect(mapStateToProp,mapDispatchToProp)(Chat)