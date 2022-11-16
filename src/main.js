import "phaser";
import Phaser from "phaser";
import GameScene from "./scenes/GameScene";

const config = {
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: "content",
    width: 450,
    height: 700,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        },
    },
    scene: [GameScene],
};

const game = new Phaser.Game(config);
