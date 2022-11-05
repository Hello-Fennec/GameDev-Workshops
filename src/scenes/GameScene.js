import Phaser from "phaser";

let background; //create variable for background
let ermine; //create variable for spritesheet
let bullet; //create variable for group object

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
        // test
    }

    create() {
        background = this.add.image(100,350,'bg'); //image
        ermine = this.physics.add.sprite(220,400,'ermine').setScale(0.5); //sprite
        // background = this.add.tileSprite(0, 0, 450, 720, 'bg').setOrigin(0, 0); //tileSprtie
        // bullet = this.physics.add.staticGroup(); //GroupObject
        // bullet.create(200,300,'bullet')
        // bullet.create(500,300,'bullet')
        // bullet.create(400,500,'bullet')
    }

    update(delta, time) {
        // background.tilePositionX += 2; //tileSprite
     

        //this.load.image('background','/src/image/objectClass/backGround.png');
        this.load.spritesheet('ermine','/src/image/objectClass/playerErmine.png', {frameWidth: 500, frameHeight:300});
        //this.load.image('bullet','src/image/objectClass/Bullet,png');

    }

    create() {
        //background=this.add.image(450,720,'bg')
        ermine = this.add.sprite(220,400,'ermine').setscale(0.5);
       // background = this.add.tileSprite(0, 0, 450, 720, 'bg').setOrigin(0, 0);
       //bullet = this.physics.add.staticGroup();
       //bullet.create(200,300,'bullet')
       //bullet.create(500,300,'bullet')
       //bullet.create(400,500,'bullet')

    }

    update(delta, time) {
        // code here
        background.tilePositionX += 2;

    }
}
export default GameScene;

