import React from 'react';
import {Route, Redirect} from "react-router-dom"

function AdminLayout(props){
    return(
        <div>
            {props.children}
        </div>
    )
}

export default function AdminTempalte({Component,...props}){
    return(
        <Route {...props}
        render = {propsComponent =>{
            if(localStorage.getItem("user")){
                return (
                    <AdminLayout>
                    <Component {...propsComponent} />
                </AdminLayout >
                )
            }
            return <Redirect to="/" />
        }

    }
        />
    )
}

