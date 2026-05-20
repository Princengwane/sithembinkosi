const PHONE = "27674049079";
const MESSAGE = "Hello, I would like to book a consultation";

export function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white transition-transform hover:scale-105 active:scale-95"
      style={{
        backgroundColor: "#25D366",
        boxShadow: "0 8px 24px -6px rgba(37,211,102,0.55)",
      }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
        <path d="M27.18 4.84A15.86 15.86 0 0 0 16.05 0C7.27 0 .14 7.13.14 15.91c0 2.81.74 5.55 2.13 7.96L0 32l8.34-2.18a15.92 15.92 0 0 0 7.71 1.97h.01c8.78 0 15.91-7.13 15.91-15.91 0-4.25-1.66-8.24-4.79-11.04zM16.06 29.1h-.01a13.2 13.2 0 0 1-6.73-1.84l-.48-.29-4.95 1.3 1.32-4.83-.31-.5a13.18 13.18 0 0 1-2.02-7.03c0-7.3 5.94-13.24 13.25-13.24 3.54 0 6.86 1.38 9.36 3.88a13.16 13.16 0 0 1 3.88 9.37c-.01 7.3-5.95 13.18-13.31 13.18z" />
      </svg>
    </a>
  );
}
