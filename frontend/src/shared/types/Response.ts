interface Response<T> {
  status: number;
  message: string;
  error: object | null;
  data: T | null;
}

export default Response;
