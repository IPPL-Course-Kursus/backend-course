import ImageKit from "imagekit";

export const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL || "",
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
});