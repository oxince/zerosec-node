import axios, { AxiosInstance } from 'axios';
import { ObfuscationPayload, ObfuscationResult, ObfuscationNode } from './interfaces';

export default class ZeroSecAPI {
  private api: AxiosInstance;

  constructor(apiKey: string) {
    if (!apiKey)
      throw new Error('API key is required');

    this.api = axios.create({
      baseURL: 'https://api.zero.sex/v1',
      headers: {
        'Authorization': apiKey
      }
    });
  }

  async obfuscate(payload: ObfuscationPayload): Promise<ObfuscationResult> {
    const {
      data,
      status
    } = await this.api.post('/obfuscate', payload);

    if (status !== 200)
      throw new Error(data.error);

    return data;
  }
}

export {
  ObfuscationNode,
  ObfuscationResult,
  ObfuscationPayload
};