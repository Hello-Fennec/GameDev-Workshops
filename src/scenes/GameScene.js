import Phaser from "phaser";
// Tutorial
let background;
let playerboy;
// let bullet;
// let basketball;
// let football;
// let volleyball;
// let bird;
// let cursor;
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
        this.load.image("bg", "src/image/objectClass/pokebackground.png");
        this.load.spritesheet("playerboy", "src/image/playerBoy.png", {
            frameWidth: 15,
            frameHeight: 21,
        });
        this.load.image("snorlax", "src/image/snorlax.png");
        this.load.image("charizard", "src/image/charizard.png");
        // this.load.image("bullet", "src/image/objectClass/Bullet.png");
        // this.load.image("basketball", "src/image/objectClass/basketball.png");
        // this.load.image("football", "src/image/objectClass/football.png");
        // this.load.image("volleyball", "src/image/objectClass/volleyball.png");
        // this.load.spritesheet("bird", "src/image/objectClass/bird.png", {
        //     frameWidth: 410,
        //     frameHeight: 310,
        // });
    }

    create() {
        // code here
        //background = this.add.image(100, 350, "bg");
        playerboy = this.physics.add
            .sprite(600, 600, "playerboy")
            .setScale(2)
            .setDepth(2);
        // bird = this.physics.add.sprite(220, 400, "bird").setScale(0.5);
        // background = this.add
        //     .tileSprite(0, 0, 450, 720, "bg")
        //     .setOrigin(0, 0)
        //     .setDepth(1);
        // this.anims.create({
        //     key: "birdAni",
        //     frames: this.anims.generateFrameNumbers("bird", {
        //         start: 0,
        //         end: 7,
        //     }),
        //     duration: 500,
        //     repeat: -1,
        // });
        // this.input.on("pointermove", (pointer) => {
        //     bird.x = pointer.x;
        //     bird.y = pointer.y;
        // });
        //        cursor = this.input.keyboard.createCursorKeys();
        // bird.setCollideWorldBounds(true);
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
        // bullet = this.physics.add.staticGroup();
        // bullet.create(200, 300, "bullet");
        // bullet.create(500, 300, "bullet");
        // bullet.create(400, 300, "bullet");
        // basketball = this.add
        //     .image(200, 300, "basketball")
        //     .setScale(0.1)
        //     .setDepth(3);
        // football = this.add
        //     .image(250, 300, "football")
        //     .setScale(0.1)
        //     .setDepth(1);
        // volleyball = this.add
        //     .image(250, 350, "volleyball")
        //     .setScale(0.2)
        // .setDepth(2);
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
        // code here
        // background.tilePositionX += 2;
        // playerboy.anims.play("playerboyAni", true);
        // if (cursor.up.isDown) {
        //     pokeboy.setVelocityY(-200);
        // } else if (cursor.down.isDown) {
        //     pokeboy.setVelocityY(200);
        // } else {
        //     pokeboy.setVelocityY(0);
        // }
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
