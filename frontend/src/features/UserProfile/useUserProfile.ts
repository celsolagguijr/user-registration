import { useMessage } from "@app/contexts/MessageContext";
import User from "@app/shared/types/models/User";
import { useService } from "@contexts/ServiceContext";
import { useQuery } from "@tanstack/react-query";
const useUserProfile = () => {
  const { success } = useMessage();
  const { user, auth } = useService();
  const userId = auth.getUserDetails()?.id || 0;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["userDetails", userId],
    queryFn: async () => {
      const response = await user.getDetails(userId);
      return response.data as User;
    },
  });

  function handleLogout() {
    auth.logout();
    success("Logout Successfully!");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  }

  return {
    error,
    data: data?.data,
    refetch,
    handleLogout,
    isLoading,
  };
};

export default useUserProfile;
