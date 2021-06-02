import { PostRequest } from '../utils/Http.util';

// interface ISpacecraft {
//   position: {
//     x: number;
//     y: number;
//   },
//   message: string;
// };

export async function getTopSecret(data: any): Promise<any> {
  const path = `topsecret`;
  const result = await PostRequest(path, data);
  return result;
}
