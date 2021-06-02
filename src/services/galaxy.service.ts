import { PostRequest } from '../utils/Http.util';

export async function getTopSecret(data: any): Promise<any> {
  const path = `topsecret`;
  const result = await PostRequest(path, data);
  return result;
}
