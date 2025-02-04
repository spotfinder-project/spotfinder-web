import Request from "./AxiosInstance.ts";

export interface CommonResponse {
  data: {
    code: string;
    message: string;
  }
}

interface LoginParams {
  socialType: "N" | "K" | "A";
  authCode: string;
}

interface DeleteParams {
  authCode: string;
}
export const postLogin = (data: LoginParams): Promise<CommonResponse> => {
  return Request({
    url: `/members/login`,
    method: "POST",
    data,
  });
};

export const postDeleteAccount = (
  data: DeleteParams
): Promise<CommonResponse> => {
  return Request({
    url: `/members/unlink`,
    method: "POST",
    data,
  });
};
