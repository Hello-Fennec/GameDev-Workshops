import "phaser";
import Phaser from "phaser";
import GameScene from "./scenes/GameScene";
import MainMenu from "./scenes/MainMenu";
import CutScene from "./scenes/CutScene";

const config = {
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: "content",
    width: 1080,
    height: 700,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        },
    },
    scene: [MainMenu, GameScene, CutScene],
};

const game = new Phaser.Game(config);
