import { useState } from "react";
import "./ReservationComponent.css"; // Asegúrate de importar el archivo CSS correcto

const ReservationComponent = () => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva hecha para el ${fecha} a las ${hora}`);
    // Aquí puedes manejar el envío de datos a un backend o procesarlos
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2 className="h2">Reservar Fecha y Hora</h2>
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
            Reservar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationComponent;
