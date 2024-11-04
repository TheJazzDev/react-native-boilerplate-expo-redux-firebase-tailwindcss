export const supressError = () => {
    const originalConsoleError = console.error;

    console.error = (...args) => {
      if (
        args[0] &&
        typeof args[0] === 'string' &&
        args[0].includes('Support for defaultProps will be removed')
      ) {
        return;
      }

      if (
        args[1] &&
        typeof args[1] === 'string' &&
        args[1].includes('You are initializing Firebase Auth')
      ) {
        return;
      }

      originalConsoleError(...args);
    };
};