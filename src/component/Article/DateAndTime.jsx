import { BiTimeFive } from "react-icons/bi";
import {  format } from 'date-fns'
function DateAndTime() {
  return (
    <div className="flex items-center text-sm">
      <BiTimeFive/>
      <p className="ml-2"> {format(new Date(), 'yyyy-MM-dd  hh:mm')}</p>
     
    </div>
  )
}

export default DateAndTime
