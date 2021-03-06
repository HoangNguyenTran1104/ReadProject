import React, { Component } from 'react'
import './CSS/index.css'
import {NavLink, Link} from "react-router-dom"



export default class Navbar extends Component {

    GetHoTen = () =>{
        if(localStorage.getItem("user")){
            return(
                <div   className="nav-link dropdown-toggle dropdownAdmin"  id="navbarDropdownAdmin" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {JSON.parse(localStorage.getItem("user"))} <span><i className="fa fa-globe-americas"></i></span>
                </div >
            )
        }
    }

    DeleteLocal = () =>{
        if(localStorage.getItem("user")){
            localStorage.removeItem("user");
        }
        
    }


    render() {
        return (
            <div className="container-fluid Navbar  row">
                <div className="col-md-2 Navbar_logo">
                    <h1 className="text-center">UEF</h1>
                </div>
            <div className="col-md-10 Navbar_container ">
            <nav className="navbar navbar-expand-lg navbar-light"  >
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse  animated wow slideInLeft" id="navbarSupportedContent" data-wow-delay="700ms">
                <ul className="navbar-nav mr-auto px-auto "  >
                <li className="nav-item  ">
                    <NavLink exact to="/" className="nav-link" activeClassName= "main-nav-active">HOME<span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item dropdown " >
                    <NavLink to="/work"  className="nav-link dropdown-toggle dropdownWork" activeClassName= "main-nav-active"   id="navbarDropdownWork" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    WORK 
                    </NavLink >
                    <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdownWork" id="dropMenuWork">
                    <Link  className="dropdown-item " to="#"><i className="fa fa-tasks"></i> Danh s??ch c??ng vi???c (Tasks)</Link>
                    <Link  className="dropdown-item" to="#"><i className="fa fa-project-diagram"></i>D??? ??n,nh??m (Projects/Teams)</Link>
                    <Link  className="dropdown-item" to="#"><i className="fa fa-check"></i> Qui tr??nh c??ng vi???c (Checkflow)</Link>
                    <Link  className="dropdown-item" to="#"><i className="fa fa-exchange-alt"></i> Qui tr??nh l??m vi???c (Workflow)</Link>
                    <Link  className="dropdown-item" to="#"><i className="fa fa-shield-alt"></i> Gi??m s??t c??ng vi???c hi???n tr?????ng</Link>
                    <Link  className="dropdown-item" to="/work-manage-task"><i className="fa fa-newspaper"></i>B??o c??o gi??m s??t c??ng vi???c</Link>
                    <Link className="dropdown-item" to="#"><i className="fa fa-cog"></i> Qu???n tr??? ph??n h??? WORX+</Link>
                    </div>
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link"  activeClassName= "main-nav-active" to="/kpi" >KPI</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link"  activeClassName= "main-nav-active" to="/admin-user">ADMIN</NavLink>
                </li>
                <li className="nav-item"> 
                    <NavLink  className="nav-link"  activeClassName= "main-nav-active" to="/help">HELP</NavLink>
                </li>
                </ul>
                <div className="form-inline my-2 my-lg-0 Navbar_Admin">
                <ul className="navbar-nav mr-auto px-auto">

                    <li className="nav-item dropdown">
                        {/* <NavLink   className="nav-link dropdown-toggle dropdownAdmin"  activeClassName= "main-nav-active" to="/dashboard" id="navbarDropdownAdmin" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ADMIN <span><i className="fa fa-globe-americas"></i></span>
                        </NavLink > */}
                        {this.GetHoTen()}
                        <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdownAdmin" id="dropdownAdmin">
                        <Link  className="dropdown-item" to="#"><i className="fa fa-user-shield"></i>?????i m???t kh???u</Link>
                        <Link  className="dropdown-item" to="/sign-in"  onClick={this.DeleteLocal}><i className="fa fa-sign-out-alt" ></i>????ng xu???t</Link>
                        </div>
                    </li>

                </ul>
                </div>
                
            </div>
            </nav>
                </div>
            </div>

            
        )
    }


}
