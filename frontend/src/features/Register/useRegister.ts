import { useMessage } from "@app/contexts/MessageContext";
import { UserRegistration } from "@app/shared/types/models/User";
import { useService } from "@contexts/ServiceContext";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
const userRegistration = () => {
  const { auth } = useService();
  const { success } = useMessage();
  const [error, setError] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<object | null>({});

  const { mutate, status } = useMutation<object, Error, UserRegistration>({
    mutationFn: async (data: UserRegistration) => await auth.register(data),
    onSuccess: (res) => {
      auth.setToken(res?.data?.data?.token);
      auth.setUserDetails(res?.data?.data?.user);
      success("Successfully Created!");
      setTimeout(() => {
        window.location.href = "/app/main";
      }, 1000);
    },
    onError: (error: unknown) => {
      const message = error?.response?.data?.message ?? "";
      setError(message);
      setFieldErrors(error?.response?.data?.error ?? {});
    },
  });

  return {
    error,
    fieldErrors,
    register: mutate,
    isLoading: status === "pending",
  };
};

export default userRegistration;
