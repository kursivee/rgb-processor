export function getDistance(rgb1, rgb2) {
    const red = rgb2.red - rgb1.red;
    const green = rgb2.green - rgb1.green;
    const blue = rgb2.blue - rgb1.blue;
    return Math.sqrt(Math.pow(red, 2) + Math.pow(green, 2) + Math.pow(blue, 2));
}