
// enums - object like syntax - using enums we can represents related constant data
// const small = "S";
// const large = "L";
// const medium = "M";

enum Size {
    small,
    medium,
    large,
}
/* 
  {
      '0': 'small',
      '1': 'medium',
      '2': 'large',
      small: 0,
      medium: 1,
      large: 2
  }
*/
let smallSize: Size = Size.small;
let largeSize: Size = Size.large;
console.log(Size);
console.log(smallSize);
console.log(largeSize);

const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;

enum seatChoice {
    AISLE = "AISLE",
    MIDDLE = "MIDDLE",
    WINDOW = "WINDOW"
}

const seatA = seatChoice.AISLE;
console.log(seatA);


export {}