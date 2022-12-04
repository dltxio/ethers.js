"use strict";

import { BytesLike } from "@ethersproject/bytes";
import { formatBytesNString, parseBytesNString } from "./bytesN";

export function formatBytes32String(text: string): string {
    return formatBytesNString(text, 32);
}

export function parseBytes32String(bytes: BytesLike): string {
    return parseBytesNString(bytes, 32);
}

