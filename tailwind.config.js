/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        animation: {
            'fade-in-up': 'fadeInUp 1s ease-out forwards',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'bounce-slow': 'bounce 3s infinite',
            'float': 'float 6s ease-in-out infinite',
            'pulse-glow': 'pulseGlow 2s infinite alternate',
            'slide-in-bottom': 'slideInBottom 1s ease-out forwards', // Added this one for problems/approach
        },
        keyframes: {
            fadeInUp: {
                '0%': { opacity: 0, transform: 'translateY(20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
            },
            pulse: {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0.7 },
            },
            bounce: {
                '0%, 100%': { transform: 'translateY(-25%)' },
                '50%': { transform: 'translateY(0)' },
            },
            float: {
                '0%': { transform: 'translateY(0px) rotate(0deg)' },
                '50%': { transform: 'translateY(-20px) rotate(5deg)' },
                '100%': { transform: 'translateY(0px) rotate(0deg)' },
            },
            pulseGlow: {
                '0%, 100%': { boxShadow: '0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3)' },
                '50%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.5)' },
            },
            slideInBottom: {
                '0%': { opacity: 0, transform: 'translateY(50px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
            },
        }
    },
};
export const plugins = [];
