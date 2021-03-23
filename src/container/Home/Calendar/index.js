import React, { Component } from 'react'
import * as ReactDOM from 'react-dom';
import {ScheduleComponent, Day, Week,WorkWeek,Month,Agenda,Inject,ViewsDirective, ViewDirective} from '@syncfusion/ej2-react-schedule'
import {GetListCalendarAPI   } from "./module/action"
import {connect} from 'react-redux'
// import {DataManager,WebApiAdaptor} from '@syncfusion/ej2-data'


class Calendar extends Component {   
    constructor() {
        super(...arguments);
        this.data = [{
                Id: 2,
                Subject: 'Meeting',
                StartTime: new Date(2020, 10, 21, 10, 0),  // nam,thangCan = thang -1, ngay , gio, phut
                EndTime: new Date(2020, 10, 21, 12, 30),
                IsAllDay: true,
                Status: 'Completed',
                Priority: 'High'
            }];
    }

    componentDidMount(){
        this.props.FetchListCalendar();
        console.log(this.props.FetchListCalendar())
      }

    // remoteData = new DataManager({
    //     url:'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    //     adaptor: new WebApiAdaptor,
    //     crossDomain: true
    // })

    // renderHTML = () =>{
    //     const {listCalendar} = this.props
    //     if(listCalendar && listCalendar.length > 0){
    //         return listCalendar.map(item=>{
    //             return ()
    //         })
    //     }

    // }

    render() {
        const {listCalendar} = this.props
        console.log("123456",listCalendar)
        
        
        return (
            <div className="">
              <ScheduleComponent currentView="Month" height='550px'  eventSettings={{ dataSource: listCalendar,
            fields: {
                id: 'Id',
                subject: { name: 'Subject' },
                isAllDay: { name: 'IsAllDay' },
                startTime: { name: 'StartTime' },
                endTime: { name: 'EndTime' }
            }
        }}>


        <ViewsDirective>
        <ViewDirective option='WorkWeek' startHour='12:00' endHour='12:00' showWeekend={true}/>
        <ViewDirective option='Week' startHour='12:00' endHour='12:00' showWeekend={true}/>
        <ViewDirective option='Month' showWeekend={true}/>
        <ViewDirective option='Agenda' showWeekend={true}/>
      </ViewsDirective>


          <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>;
            </div>
        )
    }
}

// ReactDOM.render(<Calendar />, document.getElementById('root'));

const mapStateToProp = state =>{
    return {
        listCalendar: state.listCalendarReducer.listCalendar
    }
}




const mapDispatchToProp = dispatch =>{
    return {
        FetchListCalendar : () =>{
            dispatch(GetListCalendarAPI ())
        }
    }
}

export default connect(mapStateToProp,mapDispatchToProp) (Calendar)

