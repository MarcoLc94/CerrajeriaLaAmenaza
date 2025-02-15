import { useState, useEffect } from "react";
import "./FormComponent.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  // Agregar estado para saber si el email ha sido tocado
  const [emailTouched, setEmailTouched] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // Mantener true inicialmente

  // Modificar el useEffect para considerar si el campo ha sido tocado
  useEffect(() => {
    if (emailTouched) {
      setIsEmailValid(validateEmail(formData.email) && formData.email !== "");
    }
  }, [formData.email, emailTouched]);

  // Separar la lógica del teléfono a una función específica
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setFormData({
      ...formData,
      tel: value,
    });
  };

  // Modificar el handleChange para el email
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      email: value,
    }));
    setEmailTouched(true);
  };

  // Manejar cambios para los demás campos
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateEmail = (emailData) => {
    const emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;

    return emailValidator.test(emailData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    try {
      await emailjs.send(
        "service_0p779pc", // Reemplaza con tu Service ID
        "template_ydvmyd9", // Reemplaza con tu Template ID
        {
          name: formData.name,
          email: formData.email,
          tel: formData.tel,
          message: formData.message,
        },
        "Genp-_Rzip-Rps60D" // Reemplaza con tu Public Key
      );
      toast.success("¡Tu mensaje se ha enviado con éxito!");
      setFormData({ name: "", email: "", tel: "", message: "" }); // Limpiar el formulario
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        toast.error(`EMAILJS FAILED: ${err.text}`);
      } else {
        toast.error(`ERROR: ${err}`);
      }
    }
  };

  return (
    <div className="p-10 flex items-center justify-center form-container">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="flex w-full gap-5 align-middle justify-center">
          <h2 className="custom-button text-2xl font-bold text-gray-800 mb-6 text-center">
            Contacto
          </h2>
        </div>
        <form onSubmit={isEmailValid ? handleSubmit : null}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="custom-label block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
              required
              maxLength={20}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="custom-label block text-sm font-medium text-gray-700 mb-1"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu correo electrónico"
              required
            />
            {isEmailValid ? (
              <></>
            ) : (
              <small className="text-red-600">Ingrese un email válido</small>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="tel"
              className="custom-label block text-sm font-medium text-gray-700 mb-1"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="tel"
              value={formData.tel}
              onChange={handlePhoneChange}
              pattern="[0-9]*"
              maxLength={10}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu número de teléfono"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="custom-label block text-sm font-medium text-gray-700 mb-1"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={
              isEmailValid
                ? "custom-submit w-full bg-gray-950 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                : "custom-disabled w-full  font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none"
            }
            disabled={!isEmailValid && emailTouched}
          >
            Enviar
          </button>
        </form>
      </div>
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

export default FormComponent;
