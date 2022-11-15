import Phaser from "phaser";

let End;


class WorkShop3 extends Phaser.Scene {
    constructor(test) {
        super({
            key: "WorkShop3",
        });
    }


    preload() {
        this.load.image('end','src/image/GameOver.png');
    }


    create() {
        background = this.add.image(750,540,'end').setScale(0.5);

    }


    update(delta, time) {
        
}
}
export default WorkShop3;