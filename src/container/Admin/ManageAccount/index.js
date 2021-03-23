import React, { Component } from 'react'
import {connect} from "react-redux"
import {GetListAccountTaskAPI} from "./module/action"
import { ColumnDirective, ColumnsDirective, Filter,  GridComponent } from '@syncfusion/ej2-react-grids';
import {  Group, Inject, Page,  Sort } from '@syncfusion/ej2-react-grids';
 


class ManageAccount extends Component {

  componentDidMount(){
    this.props.GetListAccount()
  }

  HandleClickId = id =>{
    console.log(id)
  }

  render() {
    
      const {listAccount} = this.props
      return(
        <div onClick={this.HandleClickId(listAccount.taiKhoan)}>
         <GridComponent dataSource={listAccount} allowPaging={true} pageSettings={ this.pageSettings }
                filterSettings = {this.filterSettings} allowGrouping={true} groupSettings={ this.groupSettings }
                allowSorting={true} sortSettings={ this.sortSettings } allowFiltering={true} height={580}>
            <ColumnsDirective>
                <ColumnDirective field='taiKhoan' headerText='Tài khoản' width='100' textAlign="Center"   />
                <ColumnDirective field='hoTen' headerText='Họ Tên'  width='100' textAlign="Center"/>
                <ColumnDirective field='email' headerText='Email' width='100' textAlign="Center"/>
                <ColumnDirective field='soDt' headerText='Số điện thoại' width='100' format="C2" textAlign="Center"/>
                <ColumnDirective field='matKhau' headerText='Mật khẩu' width='100' format="C2" textAlign="Center"/>
                <ColumnDirective field='maLoaiNguoiDung' headerText='Mã loại người dùng' width='100' textAlign="Center"/>
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]} />
        </GridComponent>

        </div>
      )
    
  }
}

export const mapStateToProp = state =>{
  return{
    listAccount: state.listAccountReducer.listAccount
  }
}

export const mapDispatchToProp = dispatch =>{
  return{
    GetListAccount: () =>{
      dispatch(GetListAccountTaskAPI())
    }
  }
}






export default connect(mapStateToProp,mapDispatchToProp)(ManageAccount)
