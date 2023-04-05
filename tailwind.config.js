/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                green: {
                    brighter: "#1DE54F",
                    darker: "#36BE58",
                },
            },
            fontFamily: {
                "Montserrat-Regular": "Montserrat-Regular",
                "Montserrat-Medium": "Montserrat-Medium",
                "Montserrat-Bold": "Montserrat-Bold",
                "Lato-Bold": "Lato-Bold",
                "Lato-Regular": "Lato-Regular",
            },
            boxShadow: {
                box: "0 3px 30px 0  #00000016",
            },
        },
    },
    plugins: [],
});
