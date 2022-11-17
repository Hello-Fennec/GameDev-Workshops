import Phaser from "phaser";

let bullet;
let player;
let bulletGroup
let event;
let cursor

class Bullet extends Phaser.Scene {
    constructor(test) {
        super({
            key: "Bullet",
        });
    }
    preload() {
        this.load.image('bullet','src/image/TimeEventClass/Bullet.png')
        this.load.image('player','src/image/TimeEventClass/Rapid.png')
    }
    create() {
        player = this.physics.add.image(225,600,'player')
        player.setDepth(1)
        player.setCollideWorldBounds(true)

        bulletGroup = this.physics.add.group()

        event = this.time.addEvent({
            delay: 500,
            callback: function(){
                bullet = this.add.image(player.x, player.y, 'bullet')
                
                bullet.setScale(0.25)
          //      bullet.setVelocityY(-200)
                bullet.setDepth(0.9)
                bulletGroup.add(bullet)
                bulletGroup.setVelocityY(-400)

            },
            callbackScope: this,
            loop: true
        })
        cursor = this.input.keyboard.createCursorKeys();
    }
    update(delta, time) {
        for (let i = 0; i < bulletGroup.getChildren().length; i++){
            if (bulletGroup.getChildren()[i].y < -50){
                bulletGroup.getChildren()[i].destroy()
            }
        }
        if(cursor.left.isDown){
            player.setVelocityX(-700)
        }else if(cursor.right.isDown){
            player.setVelocityX(700)
        }else{
            player.setVelocityX(0)
        }

    }
}
export default Bullet;