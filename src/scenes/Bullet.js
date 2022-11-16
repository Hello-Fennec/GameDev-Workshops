import Phaser from "phaser";

let bullet;
let player;
let event;
let bulletGroup;
let cursor;


class Bullet extends Phaser.Scene {

    constructor(test) {
        super({
            key: "Bullet",
        });
    }
    preload() {
        this.preload.image('Bullet', 'src/image/TimeEventClass/Bullet.png')
        this.preload.image('player', 'src/image/TimeEventClass/Rapid.png')
        
    }
    create() {
        player = this.physic.add.image(225, 300, 'player')
        player.setDepth(2)
        player.setCollideWorldBounds(true)
        
        bulletGroup = this.physic.addGroup()

        event = this.time.addEvent({
            delay: 500,
            callback: function() {
                bullet = this.physic.add.image(player.x, player.y, 'Bullet')
                bullet.setScale(0.25)
                bullet.setDepth(1)

                bulletGroup.add('bullet')
                bulletGroup.setVelocityY(-200)

            },
            callbackScope: this,
            loop: true
        })

        cursor = this.input.keyboard.createCursorKeys();

    }
    update(delta, time) {

        for(let i = 0; i < bulletGroup.getChildren().length; i++){ 
            if(bulletGroup.getChildren()[i].y < -50){ 
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