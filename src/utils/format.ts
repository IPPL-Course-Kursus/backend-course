import { scryptSync, randomBytes } from "crypto";

const scryptConfig = {
  cost: 16384,
  blockSize: 8,
  parallelization: 1,
  keyLength: 64,
};

export const hashPassword = (password: string): string => {
  const salt = randomBytes(16).toString("base64");

  const derivedKey = scryptSync(password, salt, scryptConfig.keyLength, {
    N: scryptConfig.cost,
    r: scryptConfig.blockSize,
    p: scryptConfig.parallelization,
  });

  return `$scrypt$n=${scryptConfig.cost},r=${scryptConfig.blockSize},p=${
    scryptConfig.parallelization
  }$${salt}$${derivedKey.toString("base64")}`;
};

export const verifyPassword = (
  inputPassword: string,
  storedHash: string
): boolean => {
  console.log(storedHash, inputPassword);
  if (!inputPassword || !storedHash) {
    throw new Error("Invalid input: Password or stored hash is missing");
  }
  const [algorithm, params, salt, storedDerivedKey] = storedHash
    .split("$")
    .slice(1);

  if (algorithm !== "scrypt") {
    throw new Error("Unsupported hashing algorithm");
  }

  const { n, r, p } = Object.fromEntries(
    params.split(",").map((param) => param.split("=").map(Number))
  );

  const derivedKey = scryptSync(inputPassword, salt, scryptConfig.keyLength, {
    N: n,
    r: r,
    p: p,
  });

  return derivedKey.toString("base64") === storedDerivedKey;
};
