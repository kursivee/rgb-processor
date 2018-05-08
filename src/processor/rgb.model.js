export default class RGB {
    constructor(red, green, blue) {
        this.red = red === undefined ? getRandomInt() : red;
        this.green = green === undefined ? getRandomInt() : green;
        this.blue = blue === undefined ? getRandomInt() : blue;
    }

    compareTo(rgb) {
        const red = this.red - rgb.red;
        const green = this.green - rgb.green;
        const blue = this.blue - rgb.blue;
        return Math.sqrt(Math.pow(red, 2) + Math.pow(green, 2) + Math.pow(blue, 2));
    }

    fromZero() {
        return this.compareTo({
            red: 0,
            green: 0,
            blue: 0
        });
    }

    static createRandomRGB() {
        function getRandomInt() {
            return Math.floor(Math.random() * Math.floor(256));
        }
        return new RGB(getRandomInt(),getRandomInt(),getRandomInt())
    }
}