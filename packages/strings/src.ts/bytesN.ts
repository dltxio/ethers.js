"use strict";

import { arrayify, BytesLike, hexlify } from "@ethersproject/bytes";

import { toUtf8Bytes, toUtf8String } from "./utf8";


export function formatBytesNString(text: string, byteCount: number): string {
    if (byteCount <= 0) { throw new Error("invalid byteCount - must be greater than 0"); }
    if (byteCount !== Math.floor(byteCount)) { throw new Error("invalid byteCount - must be an integer"); }

    // Get the bytes
    const bytes = toUtf8Bytes(text);

    // Check we have room for null-termination
    if (bytes.length > byteCount - 1) { throw new Error(`bytes${byteCount} string must be less than ${byteCount} bytes`); }

    // Zero-pad up to N bytes (implicitly null-terminates)
    return hexlify(bytes).padEnd(byteCount * 2 + 2, "0");
}

export function parseBytesNString(bytes: BytesLike, byteCount: number): string {
    const data = arrayify(bytes);

    // Must be byteCount bytes with a null-termination
    if (data.length !== byteCount) { throw new Error(`invalid bytes${byteCount} - not ${byteCount} bytes long`); }
    if (data[byteCount - 1] !== 0) { throw new Error(`invalid bytes${byteCount} string - no null terminator`); }

    // Find the null termination
    let length = byteCount - 1;
    while (data[length - 1] === 0) { length--; }

    // Determine the string value
    return toUtf8String(data.slice(0, length));
}

