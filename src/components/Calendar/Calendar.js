import React, {useState} from 'react'
import Calendar from 'react-calendar'
import {Paragraph} from "../styles";
import './Calendar.css';
import moment from 'moment'

export default function Cal() {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
        console.log('dateState: ', dateState)
    }
    return (
        <>
            <Calendar
                value={dateState}
                onChange={changeDate}
            />
            <Paragraph>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></Paragraph>
        </>
    )
}



