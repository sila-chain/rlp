"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SilaJSError = exports.DEFAULT_ERROR_CODE = void 0;
exports.SilaJSErrorWithoutCode = SilaJSErrorWithoutCode;
// In order to update all our errors to use `SilaJSError`, temporarily include the
// unset error code. All errors throwing this code should be updated to use the relevant
// error code.
exports.DEFAULT_ERROR_CODE = 'SILAJS_DEFAULT_ERROR_CODE';
/**
 * Generic SilaJS error with attached metadata
 */
class SilaJSError extends Error {
    constructor(type, message, stack) {
        super(message ?? type.code);
        this.type = type;
        if (stack !== undefined)
            this.stack = stack;
    }
    getMetadata() {
        return this.type;
    }
    /**
     * Get the metadata and the stacktrace for the error.
     */
    toObject() {
        return {
            type: this.getMetadata(),
            message: this.message ?? '',
            stack: this.stack ?? '',
            className: this.constructor.name,
        };
    }
}
exports.SilaJSError = SilaJSError;
/**
 * @deprecated Use `SilaJSError` with a set error code instead
 * @param message Optional error message
 * @param stack Optional stack trace
 * @returns
 */
function SilaJSErrorWithoutCode(message, stack) {
    return new SilaJSError({ code: exports.DEFAULT_ERROR_CODE }, message, stack);
}
//# sourceMappingURL=errors.js.map