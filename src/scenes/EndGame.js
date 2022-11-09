import Phaser from "phaser";

let cat;

class EndGame extends Phaser.Scene {
    constructor(test) {
        super({
            key: "EndGame",
        });
    }

    preload() {
        this.load.image('cat', 'src/image/nonCat.jpg');
    }

    create() {
        cat = this.add.image(300,350, 'cat').setScale(2)
       
    }
    

    update(delta, time) {
    }
}
export default EndGame;

