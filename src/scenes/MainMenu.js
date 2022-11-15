import Phaser from "phaser";
let playButton;
class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: "MainMenu",
        });
    }
    preload() {
        this.load.image('startButton','src/image/play.png');
    }
    create() {
        playButton = this.add.image(380,360,'startButton').setScale(0.2);
        playButton.setInteractive();
        playButton.on("pointerdown",()=>{
            this.scene.start("WorkShop")
        })
    }
    update(delta, time) {
       
    }
}
export default MainMenu;