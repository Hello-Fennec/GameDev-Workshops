import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';
import Menu from './scenes/Menu';
import ZScene from './scenes/ZScene';
const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 1080,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug:false
        }
    },
    scene: [
        // MainMenu,
        // GameScene
        Menu,
        ZScene
    ],
    
    
};

const game = new Phaser.Game(config);

