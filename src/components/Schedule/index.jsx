import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getScheduleAsync } from '../../store/actions/schedule';
import Day from './Day';

import './index.scss'

const Schedule = () => {
  const dispatch = useDispatch();
  const group = useSelector(state => state.groups.group)
  const schedule = useSelector(state => state.schedule.schedule)
  useEffect(()=> {
    dispatch(getScheduleAsync(group))
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [group])
  return(
    <div className='schedule'>
      {group === 'Выберите группу...' ? null :
        schedule.map((day, index) =>
          <Day key={index} day={day}/>
        )
      }
    </div>
  )
}

export default Schedule
