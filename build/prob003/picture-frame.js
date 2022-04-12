"use strict";
// picture frame challenge
//
// takes in an array
//    returns a larger array where the input array is surrounded by *
//
//
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.asteriskPictureFrame = void 0;
function asteriskPictureFrame(picture) {
    // find topborderlength
    const topBorderLength = picture.length + 2;
    // variablize topborder
    let topBorder = "";
    for (let i = 0; i < topBorderLength; i++) {
        topBorder = topBorder.concat("*");
    }
    //["*".repeat(topBorderLength)]
    // create top / bottom border
    picture.unshift(topBorder);
    picture.push(topBorder);
    // add * to start and end of each line
    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = "*".concat(picture[i], "*");
    }
    return picture;
}
exports.asteriskPictureFrame = asteriskPictureFrame;
//# sourceMappingURL=picture-frame.js.map