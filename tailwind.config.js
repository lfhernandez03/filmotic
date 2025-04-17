// Este archivo es la configuración de Tailwind CSS para el proyecto.
// filepath: c:\Users\luish\OneDrive\Escritorio\filmotic\tailwind.config.js
module.exports = {
    darkMode: 'class', // Esto habilita el modo oscuro manual mediante la clase "dark"
    content: [
      './src/**/*.{js,ts,jsx,tsx}', // Escanea todos los archivos en la carpeta src
      './pages/**/*.{js,ts,jsx,tsx}', // Escanea los archivos en la carpeta pages (si existe)
      './components/**/*.{js,ts,jsx,tsx}', // Escanea los archivos en la carpeta components
    ],
    theme: {
      extend: {
        colors: {
          light: {
            background: 'var(--background-color-light)', // Usar la variable CSS
            text: 'var(--text-color-light)',
          },
          dark: {
            background: 'var(--background-color-dark)',
            text: 'var(--text-color-dark)',
          },
        },
      },
    },
    plugins: [],
  };