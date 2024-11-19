import { scryptSync, randomBytes } from "crypto";

const scryptConfig = {
  cost: 16384,
  blockSize: 8,
  parallelization: 1,
  keyLength: 64,
  maxMemory: 33554432,
};

export const hashPassword = (password: string): string => {
  const salt = randomBytes(16).toString("base64").replace(/=+$/, "");

  const derivedKey = scryptSync(password, salt, scryptConfig.keyLength, {
    N: scryptConfig.cost,
    r: scryptConfig.blockSize,
    p: scryptConfig.parallelization,
    maxmem: scryptConfig.maxMemory,
  });

  return `$scrypt$n=${scryptConfig.cost},r=${scryptConfig.blockSize},p=${
    scryptConfig.parallelization
  }$${salt}$${derivedKey.toString("base64").replace(/=+$/, "")}`;
};

export const verifyPassword = (
  inputPassword: string,
  storedHash: string
): boolean => {
  if (!inputPassword || !storedHash) {
    throw new Error("Invalid input: Password or stored hash is missing");
  }

  const [algorithm, params, salt, storedDerivedKey] = storedHash
    .split("$")
    .slice(1);

  if (algorithm !== "scrypt") {
    throw new Error("Unsupported hashing algorithm");
  }

  const paramObj = Object.fromEntries(
    params.split(",").map((param) => {
      const [key, value] = param.split("=");
      return [key, Number(value)];
    })
  );

  const { n, r, p } = paramObj;

  const derivedKey = scryptSync(inputPassword, salt, scryptConfig.keyLength, {
    N: n,
    r: r,
    p: p,
    maxmem: scryptConfig.maxMemory,
  });

  return derivedKey.toString("base64").replace(/=+$/, "") === storedDerivedKey;
};

// import { scryptSync, randomBytes } from "crypto";

// const scryptConfig = {
//   cost: 16384,
//   blockSize: 8,
//   parallelization: 1,
//   keyLength: 64,
//   saltSize: 16,
//   maxMemory: 32 * 1024 * 1024,
// };

// const serializePhc = (
//   salt: string,
//   derivedKey: Buffer,
//   params: { n: number; r: number; p: number }
// ) => {
//   return `$scrypt$n=${params.n},r=${params.r},p=${params.p}$${salt}$${derivedKey
//     .toString("base64")
//     .replace(/=+$/, "")}`;
// };

// const deserializePhc = (phcString: string) => {
//   const [algorithm, params, salt, hash] = phcString.split("$").slice(1);

//   if (algorithm !== "scrypt") {
//     throw new Error("Invalid PHC string: Unsupported algorithm");
//   }

//   if (!params || !salt || !hash) {
//     throw new Error("Invalid PHC string: Missing required components");
//   }

//   const paramObj = Object.fromEntries(
//     params.split(",").map((param) => {
//       const [key, value] = param.split("=");
//       return [key, Number(value)];
//     })
//   );

//   return {
//     id: algorithm,
//     params: paramObj as { n: number; r: number; p: number },
//     salt,
//     hash,
//   };
// };

// const validateRange = (
//   name: string,
//   value: number,
//   range: [number, number]
// ) => {
//   if (value < range[0] || value > range[1]) {
//     throw new Error(`${name} must be between ${range[0]} and ${range[1]}`);
//   }
// };

// export const hashPassword = (password: string): string => {
//   const salt = randomBytes(scryptConfig.saltSize)
//     .toString("base64")
//     .replace(/=+$/, "");

//   const derivedKey = scryptSync(password, salt, scryptConfig.keyLength, {
//     N: scryptConfig.cost,
//     r: scryptConfig.blockSize,
//     p: scryptConfig.parallelization,
//     maxmem: scryptConfig.maxMemory,
//   });

//   return serializePhc(salt, derivedKey, {
//     n: scryptConfig.cost,
//     r: scryptConfig.blockSize,
//     p: scryptConfig.parallelization,
//   });
// };

// export const verifyPassword = (
//   inputPassword: string,
//   storedHash: string
// ): boolean => {
//   try {
//     const { params, salt, hash } = deserializePhc(storedHash);

//     validateRange("n", params.n, [2, 2 ** 32 - 1]);
//     validateRange("r", params.r, [1, 2 ** 32 - 1]);
//     validateRange("p", params.p, [
//       1,
//       Math.floor(((2 ** 32 - 1) * 32) / (128 * params.r)),
//     ]);

//     const derivedKey = scryptSync(inputPassword, salt, scryptConfig.keyLength, {
//       N: params.n,
//       r: params.r,
//       p: params.p,
//       maxmem: scryptConfig.maxMemory,
//     });

//     return derivedKey.toString("base64").replace(/=+$/, "") === hash;
//   } catch (error) {
//     return false;
//   }
// };

// export const needsRehash = (storedHash: string): boolean => {
//   try {
//     const { params } = deserializePhc(storedHash);

//     return (
//       params.n !== scryptConfig.cost ||
//       params.r !== scryptConfig.blockSize ||
//       params.p !== scryptConfig.parallelization
//     );
//   } catch {
//     return true;
//   }
// };
