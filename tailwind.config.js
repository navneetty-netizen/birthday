/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    50: '#fbf9f0',
                    100: '#f5f0dc',
                    200: '#ebe0bb',
                    300: '#dec78e',
                    400: '#d1ad63',
                    500: '#c59443',
                    600: '#a97334',
                    700: '#87562c',
                    800: '#70452a',
                    900: '#5c3a25',
                },
                navy: {
                    900: '#0a192f',
                    950: '#020c1b',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'serif'],
            },
        },
    },
    plugins: [],
}
