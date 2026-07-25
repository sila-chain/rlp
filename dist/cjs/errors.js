"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SilaError = exports.DEFAULT_ERROR_CODE = void 0;
exports.SilaErrorWithoutCode = SilaErrorWithoutCode;
// In order to update all our errors to use `SilaError`, temporarily include the
// unset error code. All errors throwing this code should be updated to use the relevant
// error code.
exports.DEFAULT_ERROR_CODE = 'SILAJS_DEFAULT_ERROR_CODE';
/**
 * Generic Sila error with attached metadata
 */
class SilaError extends Error {
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
exports.SilaError = SilaError;
/**
 * @deprecated Use `SilaError` with a set error code instead
 * @param message Optional error message
 * @param stack Optional stack trace
 * @returns
 */
function SilaErrorWithoutCode(message, stack) {
    return new SilaError({ code: exports.DEFAULT_ERROR_CODE }, message, stack);
}
//# sourceMappingURL=errors.js.map