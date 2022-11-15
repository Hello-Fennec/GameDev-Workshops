import Phaser from "phaser";
let ninrun;
let background;
let keyW;
let keyA;
let keyS;
let keyD;
let rock;
let rock1;
let rock2;
let rock21;
let rock3;
let rock4;
let rock5;
class WorkShop extends Phaser.Scene {
    constructor(test) {
        super({
            key: "WorkShop",
        });
    }
    preload() {
        this.load.image('bg', 'src/image/objectClass/backGround.png')
        this.load.image('rc', 'src/image/rock.png');
        this.load.image('rc2', 'src/image/rock2.png');

        this.load.spritesheet('ninjarun', 'src/image/run.png',
            { frameWidth: 376, frameHeight: 520 })
    }
    create() {
        background = this.add.tileSprite(0, 0, 800, 720, 'bg').setOrigin(0, 0).setDepth(1);
        ninrun = this.physics.add.sprite(150, 500, 'ninjarun').setScale(0.3).setDepth(2).setSize(0, 500).setOffset(5, 20);
        rock = this.physics.add.image(650, 390, 'rc').setScale(0.08).setSize(2000, 2000).setOffset(45, 10).setDepth(2);
        rock5 = this.physics.add.image(450, 600, 'rc').setScale(0.08).setSize(2000, 2000).setOffset(45, 10).setDepth(5);
        rock3 = this.physics.add.image(150, 400, 'rc2').setScale(0.1).setSize(1500, 900).setOffset(-20, -10).setDepth(3);
        rock4 = this.physics.add.image(550, 500, 'rc').setScale(0.12).setSize(2000, 2000).setOffset(45, 10).setDepth(4);
        rock2 = this.physics.add.image(130, 650, 'rc2').setScale(0.08).setSize(1500, 900).setOffset(-20, -10).setDepth(2);
        rock21 = this.physics.add.image(20, 500, 'rc2').setScale(0.07).setSize(1500, 900).setOffset(-20, -10).setDepth(2);
        this.physics.add.collider(ninrun, rock);
        this.physics.add.collider(ninrun, rock1);
        this.physics.add.collider(ninrun, rock2);
        this.physics.add.collider(ninrun, rock21);
        this.physics.add.collider(ninrun, rock3);
        this.physics.add.collider(ninrun, rock4);
        this.physics.add.collider(ninrun, rock5);
        ninrun.setCollideWorldBounds(false);
        this.anims.create({
            key: 'ninrunAni',
            frames: this.anims.generateFrameNumbers('ninjarun', {
                start: 0,
                end: 9
            }),
            duration: 450,
            repast: -1
        })

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

    }
    update(delta, time) {

        if (keyW.isDown) {
            ninrun.setVelocityY(-200), ninrun.anims.play('ninrunAni', true);
        } else if (keyS.isDown) {
            ninrun.setVelocityY(200), ninrun.anims.play('ninrunAni', true);
        } else {
            ninrun.setVelocityY(0)
        }

        if (keyA.isDown) {
            ninrun.setVelocityX(-200), ninrun.anims.play('ninrunAni', true);
        } else if (keyD.isDown) {
            ninrun.setVelocityX(200), ninrun.anims.play('ninrunAni', true);
        } else {
            ninrun.setVelocityX(0)
        }

    }
}
export default WorkShop;