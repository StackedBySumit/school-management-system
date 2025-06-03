import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { calendarEvents } from "../libs/calendarEvents";

const localizer = momentLocalizer(moment);

const BigCalendar = (props) => {
  return (
    <div className="w-full h-full">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ minHeight: "700PX" }}
      />
    </div>
  );
};

export default BigCalendar;
