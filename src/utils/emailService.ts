// utils/emailService.ts
import emailjs from '@emailjs/browser';

export const sendUserCredentialsEmail = async (
  nombre: string,
  correo: string,
  clave: string
) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        nombre,      // debe coincidir con {{nombre}} del template
        correo,      // debe coincidir con {{correo}} del template
        clave,       // debe coincidir con {{clave}} del template
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return response.status === 200;
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return false;
  }
};
