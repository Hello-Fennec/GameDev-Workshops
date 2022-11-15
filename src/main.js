import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import EventScene from './scenes/EventScene';
import DemoGame from './demo/Game1';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 928,
    height: 560,
    physics: {
        default: 'arcade',
        arcade: {
            debug:false
        }
    },
    scene: [
        DemoGame
    ],
    
    
};

const game = new Phaser.Game(config);

