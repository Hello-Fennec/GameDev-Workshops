import 'phaser';
import Phaser from 'phaser';
import WorkShop1 from './scenes/WorkShop1';
import WorkShop2 from './scenes/WorkShop2';
import WorkShop3 from './scenes/WorkShop3';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 1500,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug:false
        }
    },
    scene: [
        WorkShop1,
        WorkShop2,
        WorkShop3
    ],
    
    
};

const game = new Phaser.Game(config);

