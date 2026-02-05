import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ErrorResponse, RemoteStatus, SuccessResponse } from "./types";
import Cookies from "js-cookie";

const baseURL = `${process.env.NEXT_PUBLIC_API_BASEURL}/api`;

/* ---------- AXIOS INSTANCE ---------- */
const axiosInstance = async () => {
  const instance = axios.create({
    baseURL,
    withCredentials: process.env.NEXT_PUBLIC_USE_CREDENTIALS === "true",
    headers: {
      Accept: "application/json",
    },
  });

  instance.interceptors.response.use(
    (res) => res,
    async (err) => {
      if (
        err.response?.status === 401 &&
        err.config?.url?.endsWith("/user/logout")
      ) {
        return Promise.reject(err);
      }

      if (err.response?.status === 401 && !err.config.__isRetryRequest) {
        if (typeof window !== "undefined") {
          Cookies.remove("authToken");
        }
        err.config.__isRetryRequest = true;
      }

      return Promise.reject(err);
    }
  );

  return instance;
};

/* ---------- RESPONSE PARSER ---------- */
const parseResponse = <T>(
  response: string
): SuccessResponse<T> | ErrorResponse => {
  try {
    const data = JSON.parse(response);

    if (data?.errors) {
      return {
        remote: RemoteStatus.Failure,
        error: { errors: data.errors },
      };
    }

    return {
      remote: RemoteStatus.Success,
      data,
    };
  } catch (error) {
    return {
      remote: RemoteStatus.Failure,
      error: { errors: error },
    };
  }
};

/* ---------- REQUEST WRAPPER ---------- */
export type ApiRequestConfig = AxiosRequestConfig & {
  skipAuth?: boolean;
};

const request = async <T>(
  config: ApiRequestConfig
): Promise<SuccessResponse<T> | ErrorResponse> => {
  try {
    const instance = await axiosInstance();

    if (!config.headers) config.headers = {};

    // 🔐 Attach token ONLY when skipAuth !== true
    if (!config.skipAuth) {
      const token = Cookies.get("authToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    const response: AxiosResponse = await instance.request({
      ...config,
      transformResponse: (res) => {
        const parsed = parseResponse<T>(res);
        return parsed.remote === RemoteStatus.Success
          ? parsed.data
          : parsed;
      },
    });

    return {
      remote: RemoteStatus.Success,
      data: response.data,
    };
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        remote: RemoteStatus.Failure,
        error: {
          errorMessage: error.response.data,
          status: error.response.status,
        },
      };
    }

    return {
      remote: RemoteStatus.Failure,
      error: error?.message || "Network error",
    };
  }
};

export { request };
