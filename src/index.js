import RGB from './processor/rgb.model';

const THRESHOLD = 20;

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(RGB_MAX));
}

const RGB1 = RGB.createRandomRGB();
const RGB2 = RGB.createRandomRGB();
const distance = RGB1.compareTo(RGB2);
const RGB1FromZero = RGB2.fromZero();

console.log(RGB1);
console.log(RGB2);
console.log(distance);
console.log(RGB1FromZero);
console.log(distance <= THRESHOLD);