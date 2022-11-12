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
        this.load.image('R', 'src/image/TimeEventClass/Rapid.png') // player
        this.load.image('S', 'src/image/TimeEventClass/Separate.png') //monster
        // this.load.image('cat', 'src/image/playermeow.jpg')
    }
    create() {
        //player
        player = this.physics.add.image(225, 600, 'R')
        player.setImmovable() //player ไม่ขยับ
        //cat
        // cat = this.add.image(player.x , player.y, 'cat').setScale(0.25)
        //monster
        monGroup = this.physics.add.group(); //สร้าง group object
        //monster spawn
        event = this.time.addEvent({
            delay: 3000, 
            callback: function() {
                monster = this.physics.add.image(225, 150, 'S')
                monGroup.add(monster)
                monGroup.setVelocityY(200)
                this.physics.add.collider(player, monster, () => {
                    monster.destroy()
                    event.destroy()
                })
            },
            callbackScope: this,
            loop: true
            // repeat: 3 //เริ่มนับจาก ครั้งต่อไป
        })
    }
    update(delta, time) {
        // for(let i = 0; i < monGroup.getChildren().length; i++){ //ทำให้เรารู้ว่าใน group มีกี่ตัว
        //     if(monGroup.getChildren()[i].y > 300){ //i จะเก็บ index ทุกตัว
        //         monGroup.getChildren()[i].destroy()
        //     }
        // }
    }
}
export default EventScene;