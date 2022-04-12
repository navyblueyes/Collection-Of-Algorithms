// picture frame challenge
//
// takes in an array
//    returns a larger array where the input array is surrounded by *
//
//
//

export default function asteriskPictureFrame(picture: string[]): string[] {
  // find topborderlength
  const topBorderLength: number = picture[0].length + 2;

  // variablize topborder
  let topBorder: string = "";

  for (let i = 0; i < topBorderLength; i++) {
    topBorder = topBorder.concat("*")
  }

  //["*".repeat(topBorderLength)]

  // create top / bottom border
  picture.unshift(topBorder)
  picture.push(topBorder)

  // add * to start and end of each line
  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*")
  }

  return picture
}
