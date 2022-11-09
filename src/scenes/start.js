import Phaser from "phaser";

let startBut;

class start extends Phaser.Scene {
    constructor(test) {
        super({
            key: "start",
        });
    }

    preload() {
        this.load.image('startButton', 'src/image/playButton.png');
    }

    create() {
        startBut = this.add.image(550,350, 'startButton').setScale(0.5)
        startBut.setInteractive()
        startBut.on("pointerdown", () =>{
            this.scene.start("GameScene")
        })
    }

    update(delta, time) {
    }
}
export default start;

