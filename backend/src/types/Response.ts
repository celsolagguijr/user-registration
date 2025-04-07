 interface Response {
    message: string,
    success: boolean,
    data:object | null;
    error : object | null;
    status: number
}

export default Response;