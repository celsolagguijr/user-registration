import { Response } from "@app/shared/types";
import AuthService from "./AuthService";
import axios from "@app/shared/utils/axios";

class UserService {
  private authService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async getDetails(id: number): Promise<Response<object>> {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.authService.getToken()}`;
    return await axios.get(`/users/${id}`);
  }
}

export default UserService;
