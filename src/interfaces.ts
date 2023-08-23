/**
 * Represents an obfuscation node.
 */
interface ObfuscationNode {
  /** The ID of the node. */
  id: number;
  /** The label of the node. */
  label: string;
}

/**
 * Represents the result of an obfuscation process.
 */
interface ObfuscationResult {
  /** The Script or URL of the obfuscation. */
  script: string;
  /** An unique identifier for the result. */
  fingerprint: string;
  /** Number of jmpFuck expressions used. */
  jmpFuckExpressionsUsed: number;
  /** Number of selfCall expressions used. */
  selfCallExpressionsUsed: number;
  /** Number of random opcodes used. */
  randomOpcodesUsed: number;
  /** The time it took to obfuscate the script. */
  time: string;
  /** The obfuscation node used. */
  nodeUsed: ObfuscationNode;
}

/**
 * Represents the payload for the obfuscation process.
 */
interface ObfuscationPayload {
  /** The Lua script to be obfuscated. */
  script: string;
  /** The platform for which the script will be obfuscated. Supported: lua, roblox, csgo, fivem. */
  platformLock?: "lua" | "roblox" | "csgo" | "fivem";
  /** Enables prevention of tampering with the script. Requires support for `loadstring` or `load` in the environment. */
  antiTamper?: boolean;
  /** Enables string encryption in the script (may impact performance, not recommended). */
  encryptStrings?: boolean;
  /** Maximizes security at the cost of performance. */
  maxSecurity?: boolean;
  /** Prevents easy extraction of constants. */
  constantEncryption?: boolean;
  /** Whether to include a URL in the response or not. */
  giveBackURL?: boolean;
}

export {
  ObfuscationNode,
  ObfuscationResult,
  ObfuscationPayload
};