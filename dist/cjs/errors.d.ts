/**
 * Generic Sila error class with metadata attached
 *
 * Kudos to https://github.com/ChainSafe/lodestar monorepo
 * for the inspiration :-)
 * See: https://github.com/ChainSafe/lodestar/blob/unstable/packages/utils/src/errors.ts
 */
export type SilaErrorMetaData = Record<string, string | number | null>;
export type SilaErrorObject = {
    message: string;
    stack: string;
    className: string;
    type: SilaErrorMetaData;
};
export declare const DEFAULT_ERROR_CODE = "SILAJS_DEFAULT_ERROR_CODE";
/**
 * Generic Sila error with attached metadata
 */
export declare class SilaError<T extends {
    code: string;
}> extends Error {
    type: T;
    constructor(type: T, message?: string, stack?: string);
    getMetadata(): SilaErrorMetaData;
    /**
     * Get the metadata and the stacktrace for the error.
     */
    toObject(): SilaErrorObject;
}
/**
 * @deprecated Use `SilaError` with a set error code instead
 * @param message Optional error message
 * @param stack Optional stack trace
 * @returns
 */
export declare function SilaErrorWithoutCode(message?: string, stack?: string): SilaError<{
    code: string;
}>;
//# sourceMappingURL=errors.d.ts.map