import {API_URL, ERROR_401} from "../consts";

export const callApi = async (endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', payload?: object) => {
  try {
    const token = sessionStorage.getItem('token');

    const result = await fetch(API_URL + endpoint, {
      method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      ...(payload ? { body: JSON.stringify(payload) } : {}),
    });

    if (result.status === 401) {
      // Token expired
      sessionStorage.removeItem('token')
      throw new Error(ERROR_401)
    }

    return result.json()
  } catch (error) {
    console.error('Error occurred while calling', endpoint, error)
    if (error?.toString() === 'Error: ' + ERROR_401) {
      throw new Error(ERROR_401)
    }
    return {
      error
    }
  }
}