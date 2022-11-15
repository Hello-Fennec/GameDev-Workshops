import Phaser from "phaser";
let redhood;
let background;

class Game1 extends Phaser.Scene {
    constructor(test) {
        super({
            key: "Game1",
        });
    }
    preload() {
        this.load.spritesheet('hoodie', 'src/myImage/')
        this.load.image('bg', 'src/myImage/Background.png');
    }
    create() {
        background = this.add.image(464, 160, 'bg');
    }
    update(delta, time) {
        
    }
}
export default Game1;