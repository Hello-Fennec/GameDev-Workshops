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
        this.load.image("bullet", "src/image/TimeEventClass/Bullet.png");
        this.load.image("player", "src/image/TimeEventClass/Rapid.png");
    }

    create() {
        //player
        player = this.physics.add.image(225, 600, "player");
        player.setDepth(1);
        player.setCollideWorldBounds(true);
        //bullet
        bulletGroup = this.physics.add.group();

        event = this.time.addEvent({
            delay: 2000,
            callback: function () {
                bullet = this.physics.add.image(player.x, player.y, "bullet");
                bullet.setScale(0.25);
                bullet.setDepth(0.9);
                bulletGroup.add(bullet);
                bulletGroup.setVelocityY(-200);
            },
            callbackScope: this,
            loop: true,
        });
        cursor = this.input.keyboard.createCursorKeys();
    }

    update(delta, time) {
        //Destroy
        for (let i = 0; i < bulletGroup.getChildren().length; i++) {
            if (bulletGroup.getChildren()[i].y < -20) {
                bulletGroup.getChildren()[i].destroy();
            }
        }
        if (cursor.left.isDown) {
            player.setVelocityX(-200);
        } else if (cursor.right.isDown) {
            player.setVelocityX(200);
        } else {
            player.setVelocityX(0);
        }
    }
}
export default Bullet;
