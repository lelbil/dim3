import { API_URL } from "../consts";

export const login = async (
  username: string,
  password: string,
): Promise<{ error: null | string }> => {
  try {
    const response = await fetch(API_URL + "/token-auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.status === 401) {
      return {
        error: "Wrong username or password. Try again",
      };
    }

    const { token } = await response.json();
    sessionStorage.setItem("token", token);

    return {
      error: null,
    };
  } catch (error) {
    console.error("Error while trying to sign in", error);

    return {
      error: "Error while signing in. Please try again or contact admin",
    };
  }
};
