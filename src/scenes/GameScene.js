import Phaser from "phaser";
// Tutorial
let background;
let playerboy;
let snorlax;
let charizard;
let keyW;
let keyS;
let keyA;
let keyD;
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameScene",
        });
    }

    preload() {
        this.load.image("bg", "src/image/pokebackground.png");
        this.load.spritesheet("playerboy", "src/image/playerBoy.png", {
            frameWidth: 15,
            frameHeight: 21,
        });
        this.load.image("snorlax", "src/image/snorlax.png");
        this.load.image("charizard", "src/image/charizard.png");
    }

    create() {
        // code here
        playerboy = this.physics.add
            .sprite(600, 600, "playerboy")
            .setScale(2)
            .setDepth(2);
        this.anims.create({
            key: "playerboyAni",
            frames: this.anims.generateFrameNumbers("playerboy", {
                start: 1,
                end: 7,
            }),
            duration: 0,
            repeat: -1,
        });

        playerboy.setCollideWorldBounds(true);
        snorlax = this.physics.add
            .image(350, 340, "snorlax")
            .setScale(0.1)
            .setDepth(2);

        charizard = this.physics.add
            .image(570, 120, "charizard")
            .setScale(0.1)
            .setDepth(2);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        background = this.add.image(600, 360, "bg").setDepth(1);
        this.physics.add.collider(playerboy, snorlax, () => {
            this.scene.start("MainMenu");
        });
        this.physics.add.collider(playerboy, charizard, () => {
            this.scene.start("MainMenu");
        });
    }

    update(delta, time) {
        if (keyW.isDown) {
            playerboy.setVelocityY(-50);
            playerboy.anims.play("playerboyAni", true);
        } else if (keyS.isDown) {
            playerboy.setVelocityY(50);
            playerboy.anims.play("playerboyAni", true);
        } else {
            playerboy.setVelocityY(0);
            playerboy.anims.play("playerboyAni", true);
        }
        if (keyA.isDown) {
            playerboy.setVelocityX(-50);
            playerboy.anims.play("playerboyAni", true);
        } else if (keyD.isDown) {
            playerboy.setVelocityX(50);
            playerboy.anims.play("playerboyAni", true);
        } else {
            playerboy.setVelocityX(0);
            playerboy.anims.play("playerboyAni", true);
        }
        //Workshop
    }
}
export default GameScene;
