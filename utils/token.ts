import { Buffer } from "buffer";

export const decode = (token: string): any => {
  try {
    if (!token) return null;
    const parts: Buffer[] = token.split(".").map((part: string): Buffer => {
      return Buffer.from(part.replace(/-/g, "+").replace(/_/g, "/"), "base64");
    });
    const payload = JSON.parse(parts[1].toString());
    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
};
