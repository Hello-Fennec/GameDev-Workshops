import Phaser from "phaser";

let background;
let playButton;

class Scene1 extends Phaser.Scene {
    constructor(test) {
        super({
            key: "Scene1",
        });
    }

    preload() {
        this.load.image('bg', '/src/image/starfield2.png')
        this.load.image('startButton','src/image/playButton.png')
    }

    create() {
        background = this.add.tileSprite(0, 0, 450, 720, 'bg').setOrigin(0, 0).setDepth(1);
        playButton = this.add.image(225,360,'startButton').setScale(0.3).setDepth(2)
        playButton.setInteractive()
        playButton.on("pointerdown",()=>{
            this.scene.start("Scene2")
        })
    }

    update(delta, time) {
        background.tilePositionY -= 1.5;
    }
}
export default Scene1;