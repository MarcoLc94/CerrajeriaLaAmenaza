import { useState, useEffect } from "react";
import Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Estilo de Flatpickr
import "react-time-picker/dist/TimePicker.css"; // Estilo de TimePicker
import "./ReservationComponent.css"; // Asegúrate de tener tus estilos personalizados
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser"; // Importar emailjs

const ReservationComponent = () => {
  const [fecha, setFecha] = useState(""); // Fecha seleccionada
  const [hora, setHora] = useState(""); // Hora seleccionada
  const [nombre, setNombre] = useState(""); // Nombre del cliente
  const [comentarios, setComentarios] = useState(""); // Comentarios
  const [email, setEmail] = useState(""); // Email del cliente
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);

  useEffect(() => {
    if (emailTouched) {
      // Solo validar si el campo ha sido tocado
      setIsEmailValid(validateEmail(email) && email !== "");
    }
  }, [email, emailTouched]);

  const validateEmail = (emailData) => {
    const emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    return emailValidator.test(emailData);
  };

  // Manejador específico para el email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailTouched(true);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: nombre, // Nombre del cliente
        from_email: email, // Email del cliente
        message: {
          date: fecha,
          time: hora,
          comments: comentarios,
        },
      };

      // Enviar el correo usando EmailJS
      await emailjs.send(
        "service_0p779pc", // Tu service ID
        "template_ydvmyd9", // Tu template ID
        templateParams,
        "Genp-_Rzip-Rps60D" // Tu public key
      );

      toast.success(`Reserva hecha para el ${fecha} a las ${hora}`);
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        toast.error("EMAILJS FAILED...", err.text);
        return;
      }

      toast.error("ERROR", err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Inicializa Flatpickr para seleccionar la fecha
    Flatpickr("#calendario", {
      inline: true,
      enableTime: true, // Activar la selección de hora
      noCalendar: false, // Mostrar calendario
      dateFormat: "Y-m-d H:i", // Formato de fecha y hora
      onChange: (selectedDates) => {
        setFecha(selectedDates[0].toISOString().split("T")[0]); // Solo fecha (sin hora)
        setHora(
          selectedDates[0].toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        ); // Solo hora
      },
    });
  }, []); // Solo ejecuta una vez al montar el componente

  return (
    <div className="container mt-16">
      <form
        onSubmit={isEmailValid ? handleSubmit : null}
        className="form-custom"
      >
        <h2 className="h2">Agenda tu cita</h2>
        <div>
          <label>Selecciona una fecha:</label>
          <div id="calendario"></div> {/* Calendario visible y editable */}
        </div>
        <div className="mt-4">
          <label>Hora seleccionada:</label>
          {/* Muestra la hora seleccionada */}
          <input
            type="text"
            value={hora}
            readOnly
            className="custom-time-picker w-full"
            disabled
          />
        </div>
        <div className="mt-4">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} // Controla el estado de nombre
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => setEmailTouched(true)}
            required
          />
          {emailTouched && !isEmailValid && (
            <small className="text-red-600">Ingrese un email válido</small>
          )}
        </div>
        <div>
          <label htmlFor="comment">Comentarios:</label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            cols="30"
            placeholder="Escribe tus comentarios aquí..."
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)} // Controla el estado de comentarios
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className={
              isEmailValid
                ? "button-custom mt-5"
                : "bg-gray-500 w-full  font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none"
            }
            disabled={emailTouched && !isEmailValid}
          >
            Enviar Cita
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default ReservationComponent;
