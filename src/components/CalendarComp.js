import React from "react";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from "date-fns/getDay";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CenterFocusStrong } from "@material-ui/icons";


const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse, 
    startOfWeek,
    getDay,
    locales
})


function CalendarComp({ eventItems }) {
    
    const newEvents = eventItems.map(event => {
        const newDate = new Date(event.start_date)
        const endDate = new Date(event.end_date)
        return {
            title: event.job_title,
            allDay: true,
            start: newDate.setDate(newDate.getDate() + 1),
            end: endDate.setDate(endDate.getDate() + 1)
            }
    })
    
    return (
        <div>
            <div id='cal-info'>
                <h1 style={{ textAlign: "center", width: "300px", float: 'right', marginRight: '680px'}}> Calendar 2022</h1>
                <div id="bookmark-events" style={{width: "400px", border: '3px solid black', float: 'left', marginTop: '10px'}}>
                    <h3>Bookmarked Events</h3>
                    <div>
                        {eventItems.length === 0 && <div>Add potential employment events!</div>}
                        {eventItems.map((item) => (
                        <div key={item.id} className="row">
                        <div className="col-2 cartname">{item.job_title}</div>
                        </div>))}
                    </div>
                    <ul></ul>
                    
                </div>
            </div>

            <div id='calendar'>
                <Calendar localizer={localizer} events={newEvents} startAccessor="start" endAccessor="end" style={{height:"600px", width: "1100px", marginLeft:"190px", }}/>
            </div>
        </div>
    )
}

export default CalendarComp;