import Phaser from "phaser";

let playButton;
let mainBg

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: "MainMenu",
        });
    }

    preload() {
        this.load.image('mainBg','src/image/objectClass/iceBackground.jpeg')
        this.load.spritesheet('startButton','src/image/objectClass/FinnSprite.png',
        {frameWidth: 32, frameHeight: 27});
    }

    create() {
        mainBg = this.add.tileSprite(0, 0, 1080, 720, 'mainBg').setOrigin(0, 0)
        playButton = this.add.sprite(this.sys.game.config.width/2,this.sys.game.config.height/2,'startButton').setScale(7)
        playButton.setInteractive()
        playButton.on("pointerdown",()=>{
            this.scene.start("GameScene")
        })

        this.anims.create({
            key: 'default',
            frames: this.anims.generateFrameNumbers('startButton', {
                 start: 0,
                 end: 8
            }),
            duration: 1500,
            repeat: -1  
        })
    
    }

    update(delta, time) {
        playButton.anims.play('default', true);
    }
}
export default MainMenu;

