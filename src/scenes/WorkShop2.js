import Phaser from "phaser";
import { SetScale } from "phaser/src/actions";
let background; 
let keyW;
let keyA;
let keyS;
let keyD;
let squid;
let enemy;
let event;

class WorkShop2 extends Phaser.Scene {
    constructor(test) {
        super({
            key: "WorkShop2",
        });
    }

    preload() {
        this.load.image('bg','src/image/objectClass/BgOcean.png'); 
        this.load.spritesheet('squid','src/image/Squid.png',
        {frameWidth: 381, frameHeight: 400});
        this.load.spritesheet('enemy','src/image/objectClass/TimeEventClass/Bullet.png',
        {frameWidth: 158, frameHeight: 154});

    }

    create() {
        background = this.add.image(800,540,'bg'); //image

        squid = this.physics.add.sprite(800,540,'squid').setScale(0.5).setCollideWorldBounds(true);
        this.anims.create({
           key: 'squidAni',
           frames: this.anims.generateFrameNumbers('squid', {
                start: 0,
                end: 4
            }),
            duration: 800,
           repeat: -1  
        })
        
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

       
        event = this.time.addEvent({
            delay: 2000,
            callback: function(){
                enemy = this.physics.add.image(Math.random() * (1500 - 0) + 0,0,'enemy');
                enemy.setVelocityY(200);
                this.physics.add.collider(enemy,squid, () => {
                    this.scene.start("WorkShop3")
                });
            },
            callbackScope: this,
            loop: true,
            paused: false,
        });
    }

    update(delta, time) {
        squid.anims.play('squidAni', true);
     
        if(keyW.isDown){
            squid.setVelocityY(-500)
        }else if(keyS.isDown){
            squid.setVelocityY(500)
        }else{
            squid.setVelocityY(0)
        }

        if(keyA.isDown){
            squid.setVelocityX(-500)
        }else if(keyD.isDown){
            squid.setVelocityX(500)
        }else{
            squid.setVelocityX(0)
        }

       
    }
}
export default WorkShop2;