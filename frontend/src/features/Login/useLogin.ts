import { useMessage } from "@app/contexts/MessageContext";
import { useService } from "@contexts/ServiceContext";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
const useLogin = () => {
  const { success } = useMessage();
  const { auth } = useService();
  const [error, setError] = useState<string>("");

  const { mutate, status } = useMutation<
    object,
    Error,
    { username: string; password: string }
  >({
    mutationFn: async (variables: { username: string; password: string }) =>
      await auth.login(variables.username, variables.password),
    onSuccess: (res) => {
      auth.setToken(res?.data?.data?.token);
      auth.setUserDetails(res?.data?.data?.user);
      success("Authenticated!");
      setTimeout(() => {
        window.location.href = "/user-profile";
      }, 1000);
    },
    onError: (error: unknown) => {
      const message = error?.response?.data?.message ?? "";
      setError(message);
    },
  });

  return {
    error,
    login: mutate,
    isLoading: status === "pending",
  };
};

export default useLogin;
