const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            const newUtilities = {
                '.no-scrollbar::-webkit-scrollbar': {
                    display: 'none',
                },
                '.no-scrollbar': {
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                },
            };

            addUtilities(newUtilities);
        }),
    ],
};
