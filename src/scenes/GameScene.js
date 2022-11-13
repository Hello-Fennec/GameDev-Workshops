import Phaser from "phaser";
import { DynamicTilemapLayer } from "phaser/src/tilemaps";
let background; //create variable for background
let ermine; //create variable for spritesheet
let bullet; //create variable for group object
let basketball;
let football;
let volleyball;
let bird;
let cursor;

let keyW;
let keyA;
let keyS;
let keyD;
let keySpace;

let coin;
let finn;
let bg1;
let bg2;
let bg3;
let platforms;




class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameScene",
        });
    }

    preload() {

        //==========Background==============        
        // this.load.image('bg1','src/image/objectClass/Tiles/Assets/Background_2.png')
        // this.load.image('bg2','src/image/objectClass/Tiles/Assets/Background_1.png')
        this.load.image('bg3','src/image/objectClass/iceBackground.jpeg')
        //=========Ground===================
        this.load.image('ground','src/image/objectClass/ground.png')
        this.load.image('grass', 'src/image/objectClass/grassBlock.png')
        //============Platform===========
        this.load.image('platform','src/image/objectClass/platform.png')

        //===========Player================
        this.load.spritesheet('finn','src/image/objectClass/FinnSprite.png',
        {frameWidth: 32, frameHeight: 27});
        //=========== Coin===============
        this.load.image('coin','src/image/objectClass/coin.png')
        //===========Code Example===========
       // background = this.add.group();
    }

    create() {
       
        //=============Background============
        // bg1 = this.add.tileSprite(0, 0, 1080, 720, 'bg1').setOrigin(0, 0).setDepth(1); //tileSprtie
        // bg2 = this.add.tileSprite(0, 0, 1080, 720, 'bg2').setOrigin(0, 0).setDepth(2); //tileSprtie
        bg3 = this.add.tileSprite(0, 0, 1080, 720, 'bg3').setOrigin(0, 0).setDepth(2); //tileSprtie

        // background = this.add.group();
        // background.add(bg1);
        // background.add(bg2);

        //============Platform============
        platforms = this.physics.add.staticGroup();
       // platforms.create(0,0,'ground').setScale(0.2).setDepth(5);
      //  platforms.create(400,250,'platform').setScale(1).setDepth(5).setOrigin(0,0);

         let groundX=this.sys.game.config.width/2;
         let groundY=this.sys.game.config.height*.95;
         let fullGround = this.sys.game.config.width;
         
         platforms.create(groundX,groundY,"grass").setScale(0.25).setDepth(5).setDisplaySize(fullGround, 50).setImmovable().refreshBody()
         platforms.create(100,250,"grass").setScale(0.1).setDepth(5).refreshBody()
         platforms.create(200,200,"grass").setScale(0.1).setDepth(5).refreshBody()
         platforms.create(300,150,"grass").setScale(0.1).setDepth(5).refreshBody()
         platforms.create(400,100,"grass").setScale(0.1).setDepth(5).refreshBody()
         platforms.create(500,100,"grass").setScale(0.1).setDepth(5).refreshBody()
         //.refreshBody()
         //
       //  platforms.

        //===========Player=================
       
        finn = this.physics.add.sprite(20,150,'finn')
        finn.setDepth(5) // layers
        //finn.setDisplaySize(64,54)// set scale of game object display
        finn.setScale(2)
        finn.setInteractive()
        finn.setOrigin(0,0.1) //set origin point for rotating/flip/hitbox, range between 0-1
        finn.setSize(20,20); //set size of hitbox
        finn.setBounce(0.1);
              //  finn.setOffset(0,0).setSize(20,15,true);
      //  finn.input.hitArea.setTo(0, 0, 0, 0);

       // finn.body.setSize(finn.width,finn.height)//setOffset(5,5)

        finn.setCollideWorldBounds(true)
        finn.setGravityY(500);

        this.anims.create({
            key: 'standAni',
            frames: this.anims.generateFrameNumbers('finn', {
                 start: 0,
                 end: 8
            }),
            duration: 1500,
            repeat: -1  
        })
        this.anims.create({
            key: 'walkAni',
            frames: this.anims.generateFrameNumbers('finn', {
                 start: 9,
                 end: 14
            }),
            flipX: true,
            duration: 800,
            repeat: -1  
        })
        //================ Coin=====================
        coin = this.physics.add.image(500,70,'coin').setDepth(5).setScale(0.02)

        //================== Colider / Overlap=====================
        this.physics.add.collider(finn, platforms);
        this.physics.add.overlap(finn, coin);
        //=================Key Input=================

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACEBAR)

        //================ Function==============
       


        //==============Code Example================
         // basketball = this.add.image(200,300,'basketball').setScale(0.1).setDepth(3);
        // football = this.add.image(250,300,'football').setScale(0.1).setDepth(1);
        // volleyball = this.add.image(250,350,'volleyball').setScale(0.2).setDepth(2);
        //background = this.add.tileSprite(0, 0, 450, 720, 'bg').setOrigin(0, 0); 
       // bg1 = this.add.image(540,290,'bg1').setScale(1.5).setDepth(4); //image

         // background = this.add.image(100,350,'bg'); //image
        // ermine = this.physics.add.sprite(220,400,'ermine').setScale(0.5).setDepth(2).setSize(420,200).setOffset(60,70); //sprite
        // ermine.setCollideWorldBounds(true);


        // this.input.on('pointermove', (pointer)=>{
    //     bird.x = pointer.x
    //     bird.y = pointer.y
    // })

        // cursor = this.input.keyboard.createCursorKeys()
    }
   
    update(delta, time) {

        this.physics.add.collider(finn, coin, () => {
            coin.destroy();
            //delay(3000);
            this.scene.start("EndScene")
            // event.destroy()
        })


           //===============Controls===============
        if(keyA.isDown){
            finn.setVelocityX(-200);
            finn.flipX = true;
            finn.anims.play('walkAni', true);
        }
        else if(keyD.isDown){
            finn.setVelocityX(200);
            finn.flipX = false;
            finn.anims.play('walkAni', true);
        }
        // else if (keyW.isDown){
        //     finn.setVelocityY(-200)
        // }
        else{
            finn.setVelocityX(0)
            finn.anims.play('standAni', true);
        }
        if (keyW.isDown && finn.body.touching.down) {
            finn.setVelocityY(-300);
        }

        //==============Code Example==========

      //  background.tilePositionX += 2; //tileSprite
        //  bird.anims.play('birdAni', true);
    
       // background.getChildren().tilePositionX += 2;

        // if(cursor.up.isDown){
        //     bird.setVelocityY(-500)
        // }else if(cursor.down.isDown){
        //     bird.setVelocityY(500)
        // }else{
        //     bird.setVelocityY(0)
        // }

        // if(cursor.left.isDown){
        //     bird.setVelocityX(-500)
        // }else if(cursor.right.isDown){
        //     bird.setVelocityX(500)
        // }else{
        //     bird.setVelocityX(0)
        // }

        // if(keyW.isDown){
        //     finn.setVelocityY(-500)
        // }else if(keyS.isDown){
        //     bird.setVelocityY(500)
        // }else{
        //     bird.setVelocityY(0)
        // }
   //     finn.setVelocityY(500);


     
    }
}
export default GameScene;

