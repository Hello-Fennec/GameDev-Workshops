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
        playButton = this.add.image(560,360,'startButton').setScale(1)
        playButton.setInteractive();
        playButton.on("pointerdown",()=>{
            this.scene.start("GameScene")
            playButton.setScale(0.5)
        })

    }

    update(delta, time) {
       
    }
}
export default MainMenu;

