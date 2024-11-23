
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/528126373570" // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-300 transition"
      aria-label="Contactar por WhatsApp"
    >
    <box-icon name='whatsapp' type='logo' color='#0a0a0a' size="40px"></box-icon>
    </a>
  );
};

export default WhatsAppButton;
 