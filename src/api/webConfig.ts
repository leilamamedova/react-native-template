import { SERVER_URL } from "@env";

export const defaultRoute = SERVER_URL + "/api";
export const AuthServerUrl = defaultRoute;

const webConfig = {
  auth: {
    login: "/",
  },
};

export default webConfig;
