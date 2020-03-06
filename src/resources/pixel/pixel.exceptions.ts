class NonBinaryValueError extends Error {
  constructor() {
    const message = `Pixel value must be a binary value`;
    
    super(message);
  };
}

export { NonBinaryValueError };