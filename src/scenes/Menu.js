import Phaser from "phaser";

let play;

class Menu extends Phaser.Scene {
    constructor(test) {
        super({
            key: "Menu",
        });
    }
    preload() {
        this.load.image('start','src/image/play.png')
    }

    create() {
        play = this.add.image(530,500,'start').setScale(0.2)
        play.setInteractive();
        play.on("pointerdown",()=>{
            this.scene.start("ZScene")
        })
        play.on("pointerover",()=>{
            play.setScale(1)
        })
        play.on("pointerout",()=>{
            play.setScale(0.2)
        })
    }

    update(delta, time) {

    }
}
export default Menu;