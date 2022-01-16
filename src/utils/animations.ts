export const animation = {
  fadeY: {
    initial: {
      opacity: 0,
      translateY: -60
    },
    whileInView: { opacity: 1, translateX: 0, translateY: 0 },
    transition05: { duration: 0.5, delay: 0.5 },
    transition06: { duration: 0.6, delay: 0.6 },
    transition07: { duration: 0.7, delay: 0.7 },
    transition08: { duration: 0.8, delay: 0.8 },
    transition09: { duration: 0.9, delay: 0.9 },
    transitio1: { duration: 1, delay: 1 }
  },
  opacity: {
    initial: {
      opacity: 0
    },
    whileInView: { opacity: 1 },
    transition: { duration: 0.5, delay: 0.5 }
  }
};
