class InvalidCredentials extends Error {
    constructor(message: string) {
        super(message);
    }
}

export default InvalidCredentials;