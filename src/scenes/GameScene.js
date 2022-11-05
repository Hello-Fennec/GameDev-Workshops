import Phaser from "phaser";
let background; //create variable for background
let ermine; //create variable for spritesheet
let bullet; //create variable for group object
let basketball;
let football;
let volleyball;
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameScene",
        });
    }

    preload() {
        this.load.image('bg','src/image/objectClass/backGround.png'); //background (image and tileSprite)
        this.load.spritesheet('ermine','src/image/objectClass/playerErmine.png', 
        {frameWidth: 500, frameHeight: 300}); //spritesheet
        this.load.image('bullet','src/image/objectClass/Bullet.png'); 
        this.load.image('basketball', 'src/image/objectClass/basketball.png');
        this.load.image('football', 'src/image/objectClass/football.png');
        this.load.image('volleyball', 'src/image/objectClass/volleyball.png');
    }

    create() {
        // background = this.add.image(100,350,'bg'); //image
        ermine = this.physics.add.sprite(220,400,'ermine').setScale(0.5).setDepth(2).setSize(450,200).setOffset(30,70); //sprite
        background = this.add.tileSprite(0, 0, 450, 720, 'bg').setOrigin(0, 0).setDepth(1); //tileSprtie
        // bullet = this.physics.add.staticGroup(); //GroupObject
        // bullet.create(200,300,'bullet')
        // bullet.create(500,300,'bullet')
        // bullet.create(400,500,'bullet')

        // basketball = this.add.image(200,300,'basketball').setScale(0.1).setDepth(2);
        // football = this.add.image(250,300,'football').setScale(0.15).setDepth(3);
        // volleyball = this.add.image(250,350,'volleyball').setScale(0.2).setDepth(1);
    }

    update(delta, time) {
        background.tilePositionX += 2; //tileSprite
     
    }
}
export default GameScene;