import { useState, useEffect } from "react";
import Flatpickr from "flatpickr";
import TimePicker from "react-time-picker";
import "flatpickr/dist/flatpickr.min.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "./ReservationComponent.css";

const ReservationComponent = () => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva hecha para el ${fecha} a las ${hora}`);
  };

  useEffect(() => {
    // Inicializa Flatpickr para el calendario
    Flatpickr("#calendario", {
      inline: true,
      onChange: (selectedDates) => {
        setFecha(selectedDates[0].toISOString().split("T")[0]);
      },
    });
  }, []);

  return (
    <div className="container mt-16">
      <form onSubmit={handleSubmit}>
        <h2 className="h2">Agenda tu cita</h2>
        <div>
          <label>Selecciona una fecha:</label>
          <div id="calendario"></div> {/* Calendario siempre visible */}
        </div>
        <div className="mt-4">
          <label>Selecciona una hora:</label>
          <TimePicker
            onChange={setHora}
            value={hora}
            disableClock={false} // Cambia a `true` si solo deseas un selector de texto
            className="custom-time-picker w-full"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="name">Nombre:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="comment">Comentarios:</label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            cols="30"
            placeholder="Escribe tus comentarios aquí..."
          />
        </div>
        <div>
          <label htmlFor="comment">Comentarios:</label>
          <input type="text area" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="button-custom mt-5">
            Enviar Cita
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationComponent;

{
  /* <form onSubmit={handleSubmit}>
        <h2 className="h2">¿Te devolvemos la llamada?</h2>
        <div>
          <label htmlFor="fecha">Selecciona una fecha:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="hora">Selecciona una hora:</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="button-custom">
            Programar llamada
          </button>
        </div>
      </form> */
}
