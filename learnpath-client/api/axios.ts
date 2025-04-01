import axios from "axios";
import { toast } from "sonner";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      toast.error("Token is Expired ,please login again");
      window.location.href = "/login";
    } else if (error.response && error.response.status === 404) {
      toast.error("User Not found try to create a account");
      window.location.href = "/login";
    }
    localStorage.removeItem("token");
    return Promise.reject(error);
  }
);
