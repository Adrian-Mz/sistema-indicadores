# 📊 Sistema de Indicadores - ESPOCH

Este sistema permite visualizar indicadores académicos como **titulación**, **deserción**, **afinidad**, y más, mediante dashboards organizados por facultad. Se trata de una aplicación web desarrollada en React con Vite, TypeScript y CoreUI, que integra datos desde fuentes como Supabase y Looker Studio.

---

## 🚀 Herramientas y tecnologías utilizadas

- ⚛️ **React** + **TypeScript**
- ⚡ **Vite** como bundler
- 🎨 **CoreUI React** como framework de componentes
- 🛠️ **Supabase** para autenticación y base de datos
- 📈 **Looker Studio** para visualización de dashboards
- 📬 **EmailJS** para notificaciones por correo
- 🧩 Arquitectura modular por rutas y funcionalidades

---

## 📦 Cómo clonar e iniciar el proyecto

```bash
# 1. Clona el repositorio
git clone https://github.com/tuusuario/sistema-indicadores.git

# 2. Entra al proyecto
cd sistema-indicadores

# 3. Instala las dependencias
npm install

# 4. Configura las variables de entorno
cp .env.example .env
# Luego edita el archivo .env con tus claves de Supabase y EmailJS

# 5. Inicia el servidor de desarrollo
npm run dev
