import Phaser from "phaser";
let monster;
let player;
let event;
let monGroup;
let cat;

let score = 0;
let text;
let cursor;
class EventScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "EventScene",
        });
    }

    preload() {
        this.load.image("R", "src/image/TimeEventClass/Rapid.png");
        this.load.image("S", "src/image/TimeEventClass/Separate.png");
        this.load.image("cat", "src/image/playermeow.jpg");
    }

    create() {
        player = this.physics.add.image(225, 600, "R");
        player.setImmovable(); //ไม่ขยีบตอนcollider

        // cat = this.add.image(player.x, player.y, "cat").setScale(0.2);

        monGroup = this.physics.add.group();
        //monster = this.physics.add.image(225, 150, "S");
        event = this.time.addEvent({
            delay: 2000,
            callback: function () {
                monster = this.physics.add.image(225, 150, "S");
                monGroup.add(monster);
                monGroup.setVelocityY(200);
                //event.destroy(); //Destroy Event
                //monster.setVelocityY(200);
                // this.physics.add.collider(player, monGroup, () => {
                //     //monster.destroy(); //ทำลาย object ทิ้ง
                //     monGroup.destroy();
                // });
            },
            callbackScope: this,
            //loop: true,
            repeat: 5,
        });
        text = this.add.text(15, 15, "Score " + score);
        cursor = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(player, monGroup, () => {
            monster.destroy();
            score++;
            text.setText("Score : " + score);
        });
    }

    update(delta, time) {
        for (let i = 0; i < monGroup.getChildren().length; i++) {
            if (monGroup.getChildren()[i].y > 300) {
                monGroup.getChildren()[i].destroy();
            }
        }

        if (cursor.left.isDown) {
            player.setVelocityX(-200);
        } else if (cursor.right.isDown) {
            player.setVelocityX(200);
        } else if (cursor.up.isDown) {
            player.setVelocityY(-200);
        } else if (cursor.down.isDown) {
            player.setVelocityY(200);
        } else {
            player.setVelocityY(0);
            player.setVelocityX(0);
        }
    }
}
export default EventScene;
