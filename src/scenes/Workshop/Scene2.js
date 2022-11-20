import Phaser from "phaser";
import { SetScale } from "phaser/src/actions";
let background; 
let keyW;
let keyA;
let keyS;
let keyD;
let ship;
let rock;
let event;
let bullet;
let bulletGroup;
let bulletevent;

class Scene2 extends Phaser.Scene {
    constructor(test) {
        super({
            key: "Scene2",
        });
    }

    preload() {
        this.load.image('bg','src/image/starfield1.jpg'); 
        this.load.spritesheet('ship','src/image/Ship.png',
        {frameWidth: 150.2, frameHeight: 381});
        this.load.image('rock','src/image/Meteor.png');
        this.load.image('bullet', 'src/image/bullet234.png')
    }

    create() {
        background = this.add.tileSprite(0, 0, 450, 720, 'bg').setOrigin(0, 0).setDepth(1);

        ship = this.physics.add.sprite(225,700,'ship').setScale(0.5).setCollideWorldBounds(true).setDepth(3).setSize(190,190).setOffset(-22, 20);
        this.anims.create({
           key: 'shipAni',
           frames: this.anims.generateFrameNumbers('ship', {
                start: 0,
                end: 4
            }),
            duration: 250,
           repeat: -1  
        })
        
        event = this.time.addEvent({
            delay: 1000,
            callback: function(){
                rock = this.physics.add.image(Math.random() * (800 - 0) + 0,0,'rock').setDepth(2).setScale(0.06);
                rock.setVelocityY(150);
                this.physics.add.collider(rock,ship, () => {
                    this.scene.start("Scene3")
                });
            },

            callbackScope: this,
            loop: true,
            paused: false,
        });

        bulletevent = this.time.addEvent({
            delay: 150,
            callback: function() {
                bullet = this.physics.add.image(ship.x, ship.y,'bullet');
                bullet.setScale(1);
                bullet.setDepth(2);
                bullet.setVelocityY(-600);
            },
            callbackScope: this,
            loop: true,
            pause: false,
        });

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    }

    update(delta, time) {
        ship.anims.play('shipAni', true);
     
        // this.physics.add.collider(event,bullet, () => {
        //     event.destroy()
        // });

        if(keyW.isDown){
            ship.setVelocityY(-450)
        }else if(keyS.isDown){
            ship.setVelocityY(450)
        }else{
            ship.setVelocityY(0)
        }
        if(keyA.isDown){
            ship.setVelocityX(-450)
        }else if(keyD.isDown){
            ship.setVelocityX(450)
        }else{
            ship.setVelocityX(0)
        }

        background.tilePositionY -= 1.5;
    }
}
export default Scene2;