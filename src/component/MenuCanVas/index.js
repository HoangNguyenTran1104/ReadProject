import React from 'react'
import {Link, withRouter,NavLink} from 'react-router-dom';
import OffcanvasMenu from 'react-offcanvas-menu-component'; 
import imgAdmin from './img/admin.png'
import './CSS/index.css'

function MenuCanvas({location}) {
    return (
      <div className="row container-fluid Menu_Container">
        <div className="col-md-2">
            <OffcanvasMenu  className="Menu_Canvas"
			Link={Link} 
			location={location} 
			config={{
				width: 200, 
                push: true, 
                
			}}
            isOpen = {true}
                
			menu={[
				{text: 'Home', link: '/'}, 
				{text: 'Cá nhân', link: '/page', submenu: [ 
					// {text:'Đơn chấm công', link:'/'},
                    {text:'Đơn chấm công', link:'/'},
                    {text:'Bảng chấm công', link:'/'},
                    {text:'Đề xuất', link:'/'},
                    {text:'KPI', link:'/'},
                    {text:'Bảng lương cá nhân', link:'/'},
                ]},

                {text: 'Quản lí', link: '/page', submenu: [ 
					{text:'Duyệt đơn chấm công', link:'/'},
                    {text:'Duyệt đề xuất', link:'/'},,
                    {text:'Giám sát chấm công', link:'/'},
                    {text:'Giám sát vị trí chấm công', link:'/'}

                ]},

            ]}
            
 


		/>
        </div>
        </div>
            

    )
}




export default withRouter(MenuCanvas)
