import Phaser from "phaser";

let Died;
let background;

class Scene3 extends Phaser.Scene {
    constructor(test) {
        super({
            key: "Scene3",
        });
    }

    preload() {
        this.load.image('bg', '/src/image/starfield2.png')
        this.load.image('Died','src/image/Died.png')
    }

    create() {
        background = this.add.tileSprite(0, 0, 450, 720, 'bg').setOrigin(0, 0).setDepth(1);
        Died = this.add.image(225,360,'Died').setScale(1).setDepth(2)
    }

    update(delta, time) {
        background.tilePositionY -= 0.5;
    }
}
export default Scene3;