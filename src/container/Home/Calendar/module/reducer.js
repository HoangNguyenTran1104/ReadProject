import {GET_CALENDAR_REQUEST,
    GET_CALENDAR_SUCCESS,
    GET_CALENDAR_FAILED}
    from './constant'

    let initialState = {
        listCalendar: [],
        listCalendarLoading: false,
        listCalendarErr: null
    }

    const listCalendarReducer = ( state = initialState, action)=>{
        switch(action.type){

            case GET_CALENDAR_REQUEST :{
                state.listCalendar =  []
                state.listCalendarLoading = true
                state.listCalendarErr = null

                return {...state}
            }

            case GET_CALENDAR_SUCCESS :{
                state.listCalendar =  action.data
                state.listCalendarLoading = false
                state.listCalendarErr = null

                return {...state}
            }

            case GET_CALENDAR_FAILED :{
                state.listCalendar =  []
                state.listCalendarLoading = false
                state.listCalendarErr = action.err

                return {...state}
            }



            default:
            return {...state}
        }
    }

    export default listCalendarReducer