class CustomAPIError extends Error {
    constructor(msg, statusCode) {
        super(msg)
        this.statusCode = statusCode;
    }
}

const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode);  // throw error to catch it in the middleware and send response with status code
}

module.exports = createCustomError
