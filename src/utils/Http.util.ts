const { API_URL } = process.env;

interface IResponse {
  success: boolean;
  data: Record<string, unknown> | null;
}

export const PostRequest = async (path: string, data: unknown)
: Promise<IResponse | null> => {
  const url = `${API_URL}/${path}`;
  const headers = new Headers();
  headers.append('content-type', 'application/json');
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });
  if (response.ok) {
    try {
      const result = await response.json();
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      return null;
    }
  } else if (response.status === 400) {
    try {
      const result = await response.json();
      return {
        success: false,
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        data: null,
      };
    }
  }
  throw new Error('Network Error');
};

export const SendRequest = async(path: string): Promise<IResponse | null> => {
  const headers = new Headers();
  const url = `${API_URL}/${path}`;
  const response = await fetch(url, {
    method: 'GET',
    headers,
  });
  if (response.ok) {
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return null;
    }
  }
  throw new Error('Error in request');
}

export default { PostRequest, SendRequest };
