import React, { Component } from 'react'
import './CSS/index.css'

export default class Focus extends Component {
    render() {
        return (
            <div className="container-fluid Focus ">
            <div className=" row container-fluid mx-auto " >
                <div className="col-md-6 Focus_DayWork ">
                    <h5>Công việc hôm nay</h5>
                    <hr/>
                    <div className="DayWork_item">
                        <i className="fa fa-calendar-alt"></i>
                        <p>Không có công việc nào </p>
                    </div>
                </div>

                <div className="col-md-6 Focus_Offer">
                    <h5>Đề xuất cần duyệt</h5>
                    <hr/>
                    <div className="DayWork_item">
                        <i className="fa fa-thumbs-up"></i>
                        <p>Không có công việc nào </p>
                    </div>
                </div>


            </div>

                {/* -------------------------- */}
                <div className=" row container-fluid mx-auto " >
                <div className="col-md-6 Focus_Today ">
                    <h5>Lịch hẹn hôm nay</h5>
                    <hr/>
                    <div className="DayWork_item">
                        <i className="fa fa-calendar-check"></i>
                        <p>Không có công việc nào </p>
                    </div>
                </div>

                <div className="col-md-6 Focus_Resources">
                    <h5>Đăng kí tài nguyên cần duyệt</h5>
                    <hr/>
                    <div className="DayWork_item">
                        <i className="fa fa-file"></i>
                        <p>Không có công việc nào </p>
                    </div>
                </div>


            </div>
            {/* ----------------------------- */}
            <div className=" row container-fluid mx-auto ">
                <div className="col-md-6 Focus_Exchange ">
                    <h5>Trao đổi gần nhất</h5>
                    <hr/>
                    <div className="DayWork_item">
                        <i className="fa fa-comment"></i>
                        <p>Không có công việc nào </p>
                    </div>
                </div>

                <div className="col-md-6 Focus_Form">
                    <h5>Đơn chấm công  cần duyệt</h5>
                    <hr/>
                    <div className="DayWork_item">
                        <i className="fa fa-file"></i>
                        <p>Không có công việc nào </p>
                    </div>
                </div>


            </div>
            {/* ------------------------------------ */}
            <div className=" row container-fluid mx-auto " >
                <div className="col-md-6 Focus_Opportunity">
                    <h5>Cơ hội bán hàng cần chốt hôm nay</h5>
                    <hr/>
                    <div className="DayWork_item">
                        <i className="fa fa-dollar-sign"></i>
                        <p>Không có công việc nào </p>
                    </div>
                </div>

                <div className="col-md-6 Focus_Report">
                    <h5>Văn bản cần xử lý</h5>
                    <hr/>
                    <div className="DayWork_item">
                         <i className="fa fa-file"></i>
                        <p>Không có công việc nào </p>
                    </div>
                </div>


            </div>
            {/* ------------------------------ */}
            <div className=" row container-fluid mx-auto " >
                <div className="col-md-6 Focus_Request">
                    <h5>Yêu cầu hỗ trợ mới</h5>
                    <hr/>
                    <div className="DayWork_item">
                        <i className="fa fa-wrench"></i>
                        <p>Không có công việc nào </p>
                    </div>
                </div>

                <div className="col-md-6 Focus_Customer">
                    <h5>Cơ hội khách hàng mới</h5>
                    <hr/>
                    <div className="DayWork_item">
                        <i className="fa fa-download"></i>
                        <p>Không có công việc nào </p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
