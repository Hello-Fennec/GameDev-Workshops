import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';
import EventScene from './scenes/EventScene';
import EndScene from './scenes/EndScene';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 540,
    height: 360,
    physics: {
        default: 'arcade',
        arcade: {
            debug:true
        }
    },
    scene: [
        MainMenu,
        GameScene,
        EndScene
       
       
    ],
    
    
};

const game = new Phaser.Game(config);

