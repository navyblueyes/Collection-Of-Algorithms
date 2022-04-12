"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = __importDefault(require("./add"));
describe(add_1.default.name, () => {
    it('test 1', () => {
        // set variables
        const result = (0, add_1.default)(1, 2);
        // assert
        expect(result).toBe(3);
    });
    it('test 2', () => {
        // set variables
        const result = (0, add_1.default)(3, 2);
        // assert
        expect(result).toBe(5);
    });
});
//# sourceMappingURL=add.spec.js.map