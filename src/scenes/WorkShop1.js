import Phaser from "phaser";

let play;


class WorkShop1 extends Phaser.Scene {
    constructor(test) {
        super({
            key: "WorkShop1",
        });
    }


    preload() {
        this.load.image('startButton','src/image/play.png')
        
        
    }


    create() {
       

        play = this.add.image(750,540,'startButton').setScale(0.5)
        play.setInteractive();
        
        play.on("pointerover",()=>{
            play.setScale(0.56)
        })

        play.on("pointerout",()=>{
            play.setScale(0.5)
        })


        play.on("pointerdown",()=>{
            this.scene.start("WorkShop2")
        });

    }


    update(delta, time) {
       
    }
}
export default WorkShop1;