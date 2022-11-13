import Phaser from "phaser";

let restartButton;
let endBg;
class EndScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "EndScene",
        });
    }

    preload() {
        this.load.image('endBg','src/image/objectClass/iceBackground.jpeg')
        this.load.spritesheet('restartButton','src/image/objectClass/FinnSprite.png',
        {frameWidth: 32, frameHeight: 27});
    }

    create() {
        endBg = this.add.tileSprite(0, 0, 540, 360, 'endBg').setOrigin(0, 0)
        restartButton = this.add.sprite(this.sys.game.config.width/2,this.sys.game.config.height/2,'restartButton').setScale(7)
        restartButton.setInteractive()
        restartButton.on("pointerdown",()=>{
            this.scene.start("GameScene")
        })

        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNumbers('restartButton', {
                 start: 24,
                 end: 27
            }),
            duration: 1000,
            repeat: -1  
        })
    
    }

    update(delta, time) {
        restartButton.anims.play('attack', true);
    }
}
export default EndScene;