

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

export const pulseVariants = {
    animate: {
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export const floatingVariants = {
    animate: {
        y: [-10, 10, -10],
        rotate: [0, 5, 0, -5, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export const orbitalVariants = {
    animate: {
        rotate: 360,
        transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
        }
    }
};

export const headerOpacity = (scrollY) => ({
    opacity: scrollY.to([0, 100], [1, 0.9])
});

export const heroScale = (scrollY) => ({
    scale: scrollY.to([0, 300], [1, 1.1])
});

export const heroRotate = (scrollY) => ({
    rotateY: scrollY.to([0, 300], [0, 2])
});

export const floatingY = (scrollY) => ({
    y: scrollY.to([0, 1000], [0, -100])
});