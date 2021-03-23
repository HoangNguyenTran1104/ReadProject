import React, { Component } from 'react'

import {connect} from "react-redux"
import {GetListUserAPI} from "./module/action"
import { ColumnDirective, ColumnsDirective, Filter,  GridComponent } from '@syncfusion/ej2-react-grids';
import {  Group, Inject, Page,  Sort } from '@syncfusion/ej2-react-grids';

class UserProfile extends Component {

  componentDidMount(){
    this.props.GetListUser()
  }

  render() {
    const {listUser} = this.props
    return(
       <GridComponent dataSource={listUser} allowPaging={true} pageSettings={ this.pageSettings }
              filterSettings = {this.filterSettings} allowGrouping={true} groupSettings={ this.groupSettings }
              allowSorting={true} sortSettings={ this.sortSettings } allowFiltering={true} height={580}>
          <ColumnsDirective>
              <ColumnDirective field='id' headerText='Tài khoản' width='100' textAlign="Center"   />
              <ColumnDirective field='name  ' headerText='Họ Tên'  width='100' textAlign="Center"/>
              <ColumnDirective field='email' headerText='Email' width='100' textAlign="Center"/>
              <ColumnDirective field='password' headerText='Số điện thoại' width='100' format="C2" textAlign="Center"/>
              <ColumnDirective field='role' headerText='Mật khẩu' width='100' format="C2" textAlign="Center"/>
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>


    )
  }
}


export const mapStateToProp = state =>{
  return{
    listUser: state.listUserReducer.listUser
  }
}

export const mapDispatchToProp = dispatch =>{
  return{
    GetListUser: () =>{
      dispatch(GetListUserAPI())
    }
  }
}
export default connect(mapStateToProp,mapDispatchToProp) (UserProfile)