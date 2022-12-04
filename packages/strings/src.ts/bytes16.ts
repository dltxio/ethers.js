"use strict";

import { BytesLike } from "@ethersproject/bytes";
import { formatBytesNString, parseBytesNString } from "./bytesN";

export function formatBytes16String(text: string): string {
    return formatBytesNString(text, 16);
}

export function parseBytes16String(bytes: BytesLike): string {
    return parseBytesNString(bytes, 16);
}

