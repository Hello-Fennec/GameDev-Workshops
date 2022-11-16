import 'phaser';
import Phaser from 'phaser';
import EventScene from './scenes/EventScene';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';
import EvenetScene form './scene/EvenetScene'

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 450,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug:true
        }
    },
    scene: [
        EvenetScene,
        MainMenu,
        GameScene
        
    ],
    
    
};

const game = new Phaser.Game(config);

