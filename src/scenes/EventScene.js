import Phaser from "phaser";
let player
let monster
let event
let monGroup
let cat

class EventScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "EventScene",
        });
    }
    preload() {
        this.load.image('R', 'src/image/TimeEventClass/Rapid.png')
        this.load.image('S', 'src/image/TimeEventClass/Separate.png')
        this.load.image('cat', 'src/image/playermeow.jpg')
    }
    create() {

        player = this.physics.add.image(225, 600, 'R')
        player.setImmovable()

        monGroup = this.physics.add.group();
        event = this.time.addEvent({
            delay: 3000,
            callback: function () {
                monster = this.physics.add.image(225, 150, 'S')
                monGroup.add(monster)
                monGroup.setVelocityY(200)
                this.physics.add.collider(player, monster, () => {
                    monster.destroy()

                })
            },
            callbackScope: this,
            loop: true
        })

    }
    update(delta, time) {
        for (let i = 0; i < monGroup.getChildren().length; i++) {
            if (monGroup.getChildren()[i].y > 300) {
                monGroup.getChildren()[i].destroy()
            }
        }
    }
}
export default EventScene;