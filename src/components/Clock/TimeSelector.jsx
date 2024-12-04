import  { useState } from "react";
import Timekeeper from "react-timekeeper";

const TimeSelector = () => {
  const [time, setTime] = useState("12:00");

  return (
    <div>
      <h2>Selecciona una hora:</h2>
      <Timekeeper
        time={time}
        onChange={(newTime) => setTime(newTime.formatted12)}
        config={{ hour24Mode: true }}
      />
      <p>Hora seleccionada: {time}</p>
    </div>
  );
};

export default TimeSelector;
