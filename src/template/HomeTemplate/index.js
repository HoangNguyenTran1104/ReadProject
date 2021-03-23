import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import Navbar from '../../component/NavBar'
import MenuCanvas from '../../component/MenuCanVas'

function HomeLayout(props){
    return(
        <div>
            <MenuCanvas />
            {props.children}
        </div>
    )
}

export default function HomeTemplate({Component,...props}) {
    
       return (
        <Route {...props}
            render= {(propsComponent)=>{
                if(localStorage.getItem("user")){
                    return(
                        <HomeLayout>
                            <Component {...propsComponent} />
                        </HomeLayout>
                    )
                }
                return <Redirect to="/sign-in" />
            }}
         />
    )
        }