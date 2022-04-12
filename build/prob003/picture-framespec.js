"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const picture_frame_1 = require("./picture-frame");
describe(picture_frame_1.asteriskPictureFrame.name, () => {
    it('Test 1', () => {
        // generate input
        const data = ['abc, ded'];
        // implement picture frame function
        const response = (0, picture_frame_1.asteriskPictureFrame)(data);
        // assert
        expect(response).toEqual([
            "*****",
            "*abc*",
            "*ded*",
            "*****"
        ]);
    });
});
//# sourceMappingURL=picture-framespec.js.map