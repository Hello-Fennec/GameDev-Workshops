import Phaser from "phaser";
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

let finn;
let bg1;
let bg2;
let platforms;




class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameScene",
        });
    }

    preload() {

        //==========Background==============        
        this.load.image('bg1','src/image/objectClass/Tiles/Assets/Background_2.png')
        this.load.image('bg2','src/image/objectClass/Tiles/Assets/Background_1.png')
   
        //=========Ground===================
        this.load.image('ground','src/image/objectClass/ground.png')

        //===========Player================
        this.load.spritesheet('finn','src/image/objectClass/FinnSprite.png',
        {frameWidth: 32, frameHeight: 32});





        //===========Code Example===========
       // background = this.add.group();
    }

    create() {
       
        //=============Background============
        bg1 = this.add.tileSprite(0, 0, 1080, 720, 'bg1').setOrigin(0, 0).setDepth(1); //tileSprtie
        bg2 = this.add.tileSprite(0, 0, 1080, 720, 'bg2').setOrigin(0, 0).setDepth(2); //tileSprtie

        background = this.add.group();
        background.add(bg1);
        background.add(bg2);

        //============Platform============
        platforms = this.physics.add.staticGroup();
        platforms.create(540,750,'ground').setScale(0.3).setDepth(5).setOffset(0,295);


        //===========Player=================
       
        finn = this.physics.add.sprite(220,600,'finn').setScale(3).setDepth(5).setSize(20,20).setOffset(5,5)

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
        //================== Colider =====================
        this.physics.add.collider(finn, platforms);
        //=================Key Input=================

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACEBAR)

       


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

           //===============Controls===============
           if(keyA.isDown){
            finn.setVelocityX(-500)
            finn.flipX = true;
            finn.anims.play('walkAni', true)
        }
        else if(keyD.isDown){
            finn.setVelocityX(500)
            finn.flipX = false;
            finn.anims.play('walkAni', true)
        }
        else if (keyW.isDown){
            finn.setVelocityY(-500)
        }
        else{
            finn.setVelocityX(0)
            finn.anims.play('standAni', true);
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

