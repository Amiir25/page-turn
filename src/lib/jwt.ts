import { jwtVerify, SignJWT } from "jose";

const key = new TextEncoder().encode(process.env.SESSION_SECRET);

export type SessionPayload = {
    userId: string;
    name: string;
};

export function signToken(payload: SessionPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(key)
}

export async function verifyToken(token?: string) {
    if (!token) return null;
    try {
        const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] });
        return payload as unknown as SessionPayload;
    } catch {
        return null;    // expired, tampered, or malformed
    }
}