
export const PoliticalPage = {
    parliamentWave: {
        animate: {

            transition: {

                staggerChildren: 0.15,

                delayChildren: 0.3
            }
        }
    }
    ,

    wheelOfDharma: {
        animate: { rotate: 360 },
        transition: { duration: 20, repeat: Infinity, ease: "linear" }
    },

    lotusBloom: {
        initial: { scale: 0, rotate: -180, opacity: 0 },
        animate: { scale: 1, rotate: 0, opacity: 1 },
        transition: { duration: 1.2, ease: "backOut" }
    },
    pillarsRise: {
        initial: { y: 100, opacity: 0, scale: 0.8 },
        animate: { y: 0, opacity: 1, scale: 1 },
        transition: { duration: 1, ease: "backOut" }
    }, slideInFromTricolor: {
        initial: { x: -100, opacity: 0, filter: "blur(10px)" },
        animate: { x: 0, opacity: 1, filter: "blur(0px)" },
        transition: { duration: 0.8, ease: "easeOut" }
    }
};
