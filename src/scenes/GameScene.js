import Phaser from "phaser";
let background; //create variable for background
let ermine; //create variable for spritesheet
let bullet; //create variable for group object
let basketball;
let football;
let volleyball;
let bird;
let cursor;

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
        this.load.image('basketball','src/image/objectClass/basketball.png');
        this.load.image('football','src/image/objectClass/football.png');
        this.load.image('volleyball','src/image/objectClass/volleyball.png')
        this.load.spritesheet('bird','src/image/objectClass/bird.png',
        {frameWidth: 410, frameHeight: 310});


    }

    create() {
        background = this.add.image(600,360,'bg'); //image
        // ermine = this.physics.add.sprite(220,400,'ermine').setScale(0.5).setDepth(2).setSize(420,200).setOffset(60,70); //sprite
        
        // background = this.add.tileSprite(0, 0, 450, 720, 'bg').setOrigin(0, 0).setDepth(1); //tileSprtie

        
        // this.input.on('pointermove', (pointer)=>{
        //     ermine.x = pointer.x
        //     ermine.y = pointer.y

        // })

       
        cursor = this.input.keyboard.createCursorKeys();
        ermine = this.physics.add.sprite(220,400,'ermine').setScale(0.5).setDepth(2).setSize(420,200).setOffset(60,70).setX(700).setY(500)
       
        this.anims.create({
           key: 'ermineAni',
           frames: this.anims.generateFrameNumbers('ermine', {
            start: 0,
            end: 2
           }),
           duration: 500,
           repeat: -1  
        })


        bird = this.physics.add.sprite(220,400,'bird').setScale(0.5)
        this.anims.create({
           key: 'birdAni',
           frames: this.anims.generateFrameNumbers('bird', {
            start: 0,
            end: 7
           }),
           duration: 500,
           repeat: -1  
        })


        
        this.physics.add.collider(ermine, bird)
        // ermine.setCollideWorldBounds(true);
        // bird.setImmovable()
    }

    update(delta, time) {
        if(!cursor.isDown){
            if(cursor.up.isDown){
                ermine.setVelocityY(-300);
                ermine.anims.play('ermineAni', true)
            }else if(cursor.down.isDown){
                ermine.setVelocityY(300);
                ermine.anims.play('ermineAni', true)
               
            }else{
                ermine.setVelocityY(0);
                ermine.anims.play('ermineAni', false)
            }
            
            if(cursor.left.isDown){
                ermine.setVelocityX(-300);
                ermine.anims.play('ermineAni', true)
              
             }else if(cursor.right.isDown){
                 ermine.setVelocityX(300);
                 ermine.anims.play('ermineAni', true)
                 
             }
             else{
                ermine.setVelocityX(0);
                ermine.anims.play('ermineAni', false)
            }
           
        }
        
        
        
    }
}
export default GameScene;

