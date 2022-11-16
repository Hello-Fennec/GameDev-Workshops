import Phaser from "phaser";
let player
let monster
let event
class EventScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "EventScene",
        });
    }
    preload() {
        this.load.image('R', 'src/image/TimeEventClass/Rapid.png') // player
        this.load.image('S', 'src/image/TimeEventClass/Separate.png') //monster
    }
    create() {
        player = this.physics.add.image(225, 600, 'R')
        player.setImmovable()
        // monster = this.physics.add.image(225, 150, 'S')

        monGroup = this.physic.add.group();
        event = this.time.addEvent({
            delay: 3000, 
            callback: function() {
                monster = this.physics.add.image(225, 150, 'S')
                monster.setVelocityY(200)
                monGroup.add(monster)
                this.physic.add.collider(player,monoster, ()=>{
                    monster.destroy()
                })
            },
            callbackScope: this,
            loop: true
        })
    }
    update(delta, time) {
    }
}
export default EventScene;