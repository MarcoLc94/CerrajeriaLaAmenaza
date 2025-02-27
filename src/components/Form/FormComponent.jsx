import { useState } from "react";
import "./FormComponent.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import ReactCountryFlag from "react-country-flag"; // Importar la librería de banderas
import Select from "react-select"; // Importar react-select

// Array de países con códigos ISO y ladas
const countries = [
  { value: "+52", label: "MX", iso: "MX" }, // MX es el código ISO para México
  { value: "+1", label: "EU", iso: "US" }, // US es el código ISO para Estados Unidos
  { value: "+34", label: "ES", iso: "ES" }, // ES es el código ISO para España
  { value: "+51", label: "PE", iso: "PE" }, // PE es el código ISO para Perú
  { value: "+54", label: "AR", iso: "AR" }, // AR es el código ISO para Argentina
  // Agrega más países según sea necesario
];

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
    countryCode: "+52", // Código de país por defecto (México)
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    tel: false,
    message: false,
  });

  // Validar el email
  const validateEmail = (email) => {
    const emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    return emailValidator.test(email);
  };

  // Validar que el formulario esté completo y sea válido
  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      validateEmail(formData.email) &&
      formData.tel.trim() !== "" &&
      /^\d{10}$/.test(formData.tel) && // Teléfono debe tener 10 dígitos
      formData.message.trim().length >= 10 // Al menos 10 caracteres en el mensaje
    );
  };

  // Manejar cambios en los campos
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    setTouched({
      ...touched,
      [id]: true,
    });
  };

  // Manejar cambios en el código de país
  const handleCountryCodeChange = (selectedOption) => {
    setFormData({
      ...formData,
      countryCode: selectedOption.value,
    });
    setTouched({
      ...touched,
      tel: true,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.error("Por favor, completa todos los campos correctamente.");
      return;
    }

    try {
      await emailjs.send(
        "service_0p779pc", // Reemplaza con tu Service ID
        "template_ydvmyd9", // Reemplaza con tu Template ID
        {
          name: formData.name,
          email: formData.email,
          tel: `${formData.countryCode}${formData.tel}`,
          message: formData.message,
        },
        "Genp-_Rzip-Rps60D" // Reemplaza con tu Public Key
      );
      toast.success("¡Tu mensaje se ha enviado con éxito!");
      setFormData({
        name: "",
        email: "",
        tel: "",
        message: "",
        countryCode: "+52",
      });
      setTouched({
        name: false,
        email: false,
        tel: false,
        message: false,
      });
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        toast.error(`EMAILJS FAILED: ${err.text}`);
      } else {
        toast.error(`ERROR: ${err}`);
      }
    }
  };

  // Función para determinar si un campo es inválido
  const isFieldInvalid = (fieldName) => {
    switch (fieldName) {
      case "name":
        return touched.name && formData.name.trim() === "";
      case "email":
        return touched.email && !validateEmail(formData.email);
      case "tel":
        return touched.tel && !/^\d{10}$/.test(formData.tel);
      case "message":
        return touched.message && formData.message.length < 10;
      default:
        return false;
    }
  };

  // Personalizar las opciones del dropdown
  const formatOptionLabel = ({ value, label, iso }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ReactCountryFlag
        countryCode={iso}
        svg
        style={{ width: "1.5em", height: "1.5em", marginRight: "8px" }}
      />
      <span>
        {label} ({value})
      </span>
    </div>
  );

  return (
    <div className="p-10 flex items-center justify-center form-container">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="flex w-full gap-5 align-middle justify-center">
          <h2 className="custom-button text-2xl font-bold text-gray-800 mb-6 text-center">
            Contacto
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Campo Nombre */}
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
              onBlur={() => setTouched({ ...touched, name: true })}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                isFieldInvalid("name")
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Tu nombre"
              required
              maxLength={30}
            />
            {isFieldInvalid("name") && (
              <small className="text-red-600">El nombre es requerido.</small>
            )}
          </div>

          {/* Campo Correo Electrónico */}
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
              onChange={handleChange}
              onBlur={() => setTouched({ ...touched, email: true })}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                isFieldInvalid("email")
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Tu correo electrónico"
              required
            />
            {isFieldInvalid("email") && (
              <small className="text-red-600">Ingrese un email válido.</small>
            )}
          </div>

          {/* Campo Teléfono */}
          <div className="mb-4">
            <label
              htmlFor="tel"
              className="custom-label block text-sm font-medium text-gray-700 mb-1"
            >
              Teléfono
            </label>
            <div className="flex">
              <Select
                options={countries}
                value={countries.find((c) => c.value === formData.countryCode)}
                onChange={handleCountryCodeChange}
                formatOptionLabel={formatOptionLabel}
                className="w-2/4"
                styles={{
                  control: (base) => ({
                    ...base,
                    border: "1px solid #d1d5db",
                    borderRadius: "0.375rem 0 0 0.375rem",
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: "#d1d5db",
                    },
                  }),
                }}
              />
              <input
                type="tel"
                id="tel"
                value={formData.tel}
                onChange={handleChange}
                onBlur={() => setTouched({ ...touched, tel: true })}
                className={`w-3/5 px-3 py-2 border rounded-r-md shadow-sm focus:outline-none focus:ring-2 ${
                  isFieldInvalid("tel")
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Número de teléfono"
                required
                maxLength={10}
                pattern="\d{10}"
              />
            </div>
            {isFieldInvalid("tel") && (
              <small className="text-red-600">
                El teléfono debe tener 10 dígitos.
              </small>
            )}
          </div>

          {/* Campo Mensaje */}
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
              onBlur={() => setTouched({ ...touched, message: true })}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                isFieldInvalid("message")
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Escribe tu mensaje aquí..."
              required
              minLength={10}
              maxLength={250}
            ></textarea>
            {isFieldInvalid("message") && (
              <small className="text-red-600">
                El mensaje debe tener al menos 10 caracteres.
              </small>
            )}
          </div>

          {/* Botón de Enviar */}
          <button
            type="submit"
            className="custom-submit w-full bg-gray-950 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isFormValid()}
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
