import React from 'react'
import {Route, Redirect} from "react-router-dom"

function MasterLayout(props){
    return(
        <div className="row Master">
                {props.children}
        </div>
    )
}

export default function MasterTemplate({Component,...props}) {
    return(
        <Route {...props}
        render = {propsComponent =>{
            if(localStorage.getItem("user")){
                return (
                <MasterLayout>
                    <Component {...propsComponent} />
                </MasterLayout >
                )
            }
            return <Redirect to="/" />
        }

    }
        />
    )
}
