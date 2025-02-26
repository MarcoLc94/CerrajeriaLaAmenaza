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
  const [nombreTouched, setNombreTouched] = useState(false);
  const [comentariosTouched, setComentariosTouched] = useState(false);

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

    if (!isFormValid()) {
      toast.error("Por favor, completa todos los campos correctamente.");
      return;
    }

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

  // Validar que el formulario esté completo y sea válido
  const isFormValid = () => {
    return (
      nombre.trim() !== "" &&
      email.trim() !== "" &&
      validateEmail(email) &&
      isEmailValid &&
      fecha.trim() !== "" &&
      hora.trim() !== "" &&
      comentarios.trim() !== ""
    );
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

  // Función para determinar si un campo es inválido
  const isFieldInvalid = (fieldName) => {
    switch (fieldName) {
      case "nombre":
        return nombreTouched && nombre.trim() === "";
      case "email":
        return emailTouched && !validateEmail(email);
      case "comentarios":
        return comentariosTouched && comentarios.trim() === "";
      default:
        return false;
    }
  };

  return (
    <div className="container mt-16">
      <form onSubmit={handleSubmit} className="form-custom">
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
            onChange={(e) => {
              setNombre(e.target.value);
              setNombreTouched(true);
            }}
            onBlur={() => setNombreTouched(true)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
              isFieldInvalid("nombre")
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            required
          />
          {isFieldInvalid("nombre") && (
            <small className="text-red-600">El nombre es requerido.</small>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => setEmailTouched(true)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
              isFieldInvalid("email")
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            required
          />
          {isFieldInvalid("email") && (
            <small className="text-red-600">Ingrese un email válido.</small>
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
            onChange={(e) => {
              setComentarios(e.target.value);
              setComentariosTouched(true);
            }}
            onBlur={() => setComentariosTouched(true)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
              isFieldInvalid("comentarios")
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            required
          />
          {isFieldInvalid("comentarios") && (
            <small className="text-red-600">
              Los comentarios son requeridos.
            </small>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="button-custom mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isFormValid()}
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
