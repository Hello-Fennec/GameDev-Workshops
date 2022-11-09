import Phaser from "phaser";

let playButton;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: "MainMenu",
        });
    }
    preload() {
        this.load.image('startButton','src/image/playButton.png')
    }

    create() {
        playButton = this.add.image(500,500,'startButton').setScale(0.2)
        playButton.setInteractive();
        playButton.on("pointerdown",()=>{
            this.scene.start("GameScene")
        })
        playButton.on("pointerover",()=>{
            playButton.setScale(1)
        })
        playButton.on("pointerout",()=>{
            playButton.setScale(0.2)
        })
    }

    update(delta, time) {

    }
}
export default MainMenu;