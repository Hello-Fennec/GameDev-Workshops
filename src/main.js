import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 450, //1080 //450
    height: 720, //700
    physics: {
        default: 'arcade',
        arcade: {
            debug:false
        }
    },
    scene: [
        MainMenu, //ใส่ลูกน้ำเพื่อเชื่อม
        GameScene
    ],
    
    
};

const game = new Phaser.Game(config);

