/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'laptop': '1024px',
        },
        extend: {
            colors: {
                'primary': '#1589f6',
                'secondary': '#fcd34d',
                'dark': '#161d31',
                'dark-muted': '#283046',
                'violet': '#7367f0'
            },
        },
    },
    plugins: [],
}
