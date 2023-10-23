import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Reunião de equipe",
    start: new Date(2023, 9, 23, 9, 0),
    end: new Date(2023, 9, 23, 10, 0),
  },
  {
    title: "Ligar para cliente",
    start: new Date(2023, 9, 23, 11, 0),
    end: new Date(2023, 9, 23, 12, 0),
  },
  {
    title: "Apresentação do projeto",
    start: new Date(2023, 9, 23, 14, 30),
    end: new Date(2023, 9, 23, 15, 30),
  },
];

const MyCalendar = () => {
  const [selectedLocation, setSelectedLocation] = useState("unidade-sao-paulo");

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div>
      <div>
        <select value={selectedLocation} onChange={handleLocationChange} style={{marginBottom: "2rem"}}>
          <option value="unidade-sao-paulo">Unidade São Paulo</option>
          <option value="outra-unidade">Outra Unidade</option>
          <option value="outra-unidade-2">Outra Unidade 2</option>
        </select>
      </div>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ background: "white", border: "1px solid #e8e8e8" }}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
