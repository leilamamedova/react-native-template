import { SERVER_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";

import WebConf, { AuthServerUrl } from "@/api/WebConf";

const baseURL = SERVER_URL;
const headers = {
  "Content-Type": "application/json",
};
const errorStatusCodes = [401, 403, 404, 409, 500, 502, 503];

const validateStatus = (status): boolean => {
  if (errorStatusCodes.includes(status)) {
    return false;
  }
  return true;
};

const getTokenWhenTokenIsExpired = async (config): Promise<any> => {
  const params = {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa("test:test123")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const response = await instance.post(
    AuthServerUrl +
      WebConf.auth.login +
      `?grant_type=refresh_token&refresh_token=${await AsyncStorage.getItem(
        "refresh_token",
      )}`,
    {},
    params,
  );

  if (response.status === 200) {
    const result = response.data;
    await AsyncStorage.setItem("token", result.access_token);
    await AsyncStorage.setItem("refresh_token", result.refresh_token);
    return instance(config);
  } else {
    Alert.alert("Log Out");
  }
};

const instance = axios.create({
  baseURL,
  headers,
  timeout: 600000,
  validateStatus,
});

instance.interceptors.request.use(
  async (request) => {
    request.headers["Authorization"] = `Bearer ${await AsyncStorage.getItem(
      "token",
    )}`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      return getTokenWhenTokenIsExpired(response.config);
    }
    return Promise.reject(error);
  },
);

export default instance;
