import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';
import WorkShop from './scenes/WorkShop';
import EvenScene from './scenes/EvenScene';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 800,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            debug:false
        }
    },
    scene: [
        //MainMenu,GameScene
        MainMenu,WorkShop
       // WorkShop2
        //  EvenScene
      //WorkShop3
    ],
    
    
};

const game = new Phaser.Game(config);

