import React, { Component } from 'react'
import {connect} from "react-redux"
import {GetListManageTaskAPI} from "./module/action"
import { ColumnDirective, ColumnsDirective, Filter, FilterSettingsModel, GridComponent } from '@syncfusion/ej2-react-grids';
import {  Group, Inject, Page, PageSettingsModel, Sort, SortSettingsModel } from '@syncfusion/ej2-react-grids';
 class ManageTask extends Component {


  componentDidMount(){
    this.props.GetListTask()
  }


  render() {
    
      const {listTask} = this.props
      return <GridComponent dataSource={listTask} allowPaging={true} pageSettings={ this.pageSettings }
                filterSettings = {this.filterSettings} allowGrouping={true} groupSettings={ this.groupSettings }
                allowSorting={true} sortSettings={ this.sortSettings } allowFiltering={true} height={580}>
            <ColumnsDirective>
                <ColumnDirective field='taiKhoan' headerText='Tài khoản' width='100' textAlign="Center"/>
                <ColumnDirective field='hoTen' headerText='Họ Tên'  width='100' textAlign="Center"/>
                <ColumnDirective field='email' headerText='Email' width='100' textAlign="Center"/>
                <ColumnDirective field='soDt' headerText='Số điện thoại' width='100' format="C2" textAlign="Center"/>
                <ColumnDirective field='matKhau' headerText='Mật khẩu' width='100' format="C2" textAlign="Center"/>
                <ColumnDirective field='maLoaiNguoiDung' headerText='Mã loại người dùng' width='100' textAlign="Center"/>
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]} />
        </GridComponent>

      
    
  }
}

export const mapStateToProp = state =>{
  return{
    listTask: state.listTaskReducer.listTask
  }
}

export const mapDispatchToProp = dispatch =>{
  return{
    GetListTask: () =>{
      dispatch(GetListManageTaskAPI())
    }
  }
}




export default connect(mapStateToProp,mapDispatchToProp)(ManageTask)
