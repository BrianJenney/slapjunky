const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            '2xl': { max: '1535px' },
            // => @media (max-width: 1535px) { ... }

            xl: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '767px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '639px' },
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            backgroundImage: {
                'hero-pattern':
                    "url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80')",
                'rap-pattern':
                    "url('https://images.unsplash.com/photo-1621618963067-137bd4c9d04a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJhcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
                'trap-pattern':
                    "url('https://images.unsplash.com/photo-1543379344-402b42ddbe8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
                'randb-pattern':
                    "url('https://images.unsplash.com/photo-1461783436728-0a9217714694?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80')",
            },
        },
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
