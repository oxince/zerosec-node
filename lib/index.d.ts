import { ObfuscationPayload, ObfuscationResult, ObfuscationNode } from './interfaces';
export default class ZeroSecAPI {
    private api;
    constructor(apiKey: string);
    obfuscate(payload: ObfuscationPayload): Promise<ObfuscationResult>;
}
export { ObfuscationNode, ObfuscationResult, ObfuscationPayload };
