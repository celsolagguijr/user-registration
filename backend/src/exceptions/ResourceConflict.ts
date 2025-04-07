class ResourceConflict extends Error {
    constructor(message: string) {
        super(message);
    }
}

export default ResourceConflict;