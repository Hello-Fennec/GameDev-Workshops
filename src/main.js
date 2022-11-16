import "phaser";
import Phaser from "phaser";
import GameScene from "./scenes/GameScene";
import MainMenu from "./scenes/MainMenu";
import CutScene from "./scenes/CutScene";
import EventScene from "./scenes/EventScene";
import Bullet from "./scenes/Bullet";

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
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
    scene: [EventScene, Bullet, GameScene, MainMenu, CutScene],
};

const game = new Phaser.Game(config);
