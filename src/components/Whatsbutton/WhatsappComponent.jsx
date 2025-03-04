import "./WhatsappComponent.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/528126373570" // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="custom-whats fixed bottom-4 right-4  rounded-full p-2 shadow-lg transition"
      aria-label="Contactar por WhatsApp"
    >
      <img src="/whatsapp-logo-602.webp" alt="" style={{ width: "50px" }} />
    </a>
  );
};

export default WhatsAppButton;
