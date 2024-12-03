import "./FormComponent.css"

const FormComponent = () => {
  return (
    <div className="p-10 flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="flex w-full gap-5 align-middle justify-center">
          <h2 className="custom-button text-2xl font-bold text-gray-800 mb-6 text-center">
            Contacto
          </h2>
          {/* <box-icon name="mail-send"></box-icon> */}
        </div>
        <form>
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
              required
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
              className="custom-label w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu correo electrónico"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="custom-label block text-sm font-medium text-gray-700 mb-1"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="tel"
              className="custom-label w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="custom-submit w-full bg-gray-950 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
