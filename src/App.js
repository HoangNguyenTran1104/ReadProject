import logo from './logo.svg';
import './App.css';
import React from 'react';



import HomeTemplate from './template/HomeTemplate'
import AdminTemplate from './template/AdminTemplate'
// import MasterTempate from './template/MasterTemplate' 
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import {routesStudent, routesTeacher, routesAdmin} from './routes' 
import SignIn from './container/SignIn'
import SignUp from './container/SignUp'

import Admin from "./container/Master/Admin/layouts/Admin.js";
import RTL from "./container/Master/Admin/layouts/RTL.js";

function App() {

  const showMenuStudent = routes =>{
    if(routes && routes.length >0){
      return routes.map((item,index)=>{
        return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.Component} />
      })
    }
  }

  const showMenuTeacher = routes =>{
    if(routes && routes.length >0){
      return routes.map((item,index)=>{
        return <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.Component} />
      })
    }
  }

  // const showMenuAdmin = routes =>{
  //   if(routes && routes.length >0){
  //     return routes.map((item,index)=>{
  //       return <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.Component} />
  //     })
  //   }
  // }

  return (
    <div>
        <BrowserRouter>
            <Switch>
              {showMenuStudent(routesStudent)}
              {showMenuTeacher(routesTeacher)}
              <Route path="/admin" component={Admin} />
              <Route path="/rtl" component={RTL} />
              <Route  path={"/sign-in"}  exact={false}   component={SignIn}/>
              <Route  path= {"/sign-up"} exact={false}   component={SignUp}/> 
            </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App