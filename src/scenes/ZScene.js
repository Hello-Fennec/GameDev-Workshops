import Phaser from "phaser";

let dino;
let bg;
let cursor;
let keyW;
let keyA;
let keyS;
let keyD;
class ZScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "ZScene",
        });
    }
    preload() {
        this.load.image('bg')
        this.load.spritesheet('dino','src/image/dino/sheets/doux.png',{frameWidth: 24, frameHeight: 24});
    }
    create() {
        //background = this.add.image(100,350,'bg'); //image
        // ermine = this.physics.add.sprite(220,400,'ermine').setScale(0.5).setDepth(2).setSize(420,200).setOffset(60,70); //sprite
        // ermine.setCollideWorldBounds(true);
        //background = this.add.tileSprite(0, 0, 450, 720, 'bg').setOrigin(0, 0).setDepth(1); //tileSprtie
        // bullet = this.physics.add.staticGroup(); //GroupObject
        // bullet.create(200,300,'bullet')
        // bullet.create(500,300,'bullet')
        // bullet.create(400,500,'bullet')
        // basketball = this.add.image(200,300,'basketball').setScale(0.1).setDepth(3);
        // football = this.add.image(250,300,'football').setScale(0.1).setDepth(1);
        // volleyball = this.add.image(250,350,'volleyball').setScale(0.2).setDepth(2);
        dino = this.physics.add.sprite(500,400,'dino').setScale(5)
        this.anims.create({
           key: 'dinoAni',
           frames: this.anims.generateFrameNumbers('dino', {
            start: 0,
            end: 11
           }),
           duration: 500,
           repeat: -1
        })
    // this.input.on('pointermove', (pointer)=>{
    //     bird.x = pointer.x
    //     bird.y = pointer.y
    // })

        //cursor = this.input.keyboard.createCursorKeys()
        
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        
        dino.setCollideWorldBounds(true);
    }
    update(delta, time) {
        // background.tilePositionX += 2; //tileSprite
        dino.anims.play('dinoAni', true);


        // if(cursor.up.isDown){
        //     bird.setVelocityY(-200)
        // }else if(cursor.down.isDown){
        //     bird.setVelocityY(200)
        // }else{
        //     bird.setVelocityY(0)
        // }

        // if(cursor.left.isDown){
        //     bird.setVelocityX(-200)
        // }else if(cursor.right.isDown){
        //     bird.setVelocityX(200)
        // }else{
        //     bird.setVelocityX(0)
        // }


        if(keyW.isDown){
            dino.setVelocityY(-1000)
        }else if(keyS.isDow){
            dino.setVelocityY(0)
        }else{
            dino.setVelocityY(500)
        }
        
        if(keyA.isDown){
            dino.setVelocityX(-1000)
        }else if(keyD.isDown){
            dino.setVelocityX(1000)
        }else{
            dino.setVelocityX(0)
        }
    }
}
export default ZScene;