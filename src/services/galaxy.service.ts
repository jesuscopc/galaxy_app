import { PostRequest, SendRequest } from '../utils/Http.util';

export async function getTopSecret(data: any): Promise<any> {
  const path = 'topsecret';
  const result = await PostRequest(path, data);
  return result;
}

export async function getSatellitePosition(satelliteName: string): Promise<any> {
  const path = `topsecret_split/${satelliteName}`;
  const result = await SendRequest(path);
  return result;
}
