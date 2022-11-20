import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';
import MonsterCreation from './scenes/MonsterCreation';
import Bullet from './scenes/Bullet';
import Scene1 from './scenes/Workshop/Scene1';
import Scene2 from './scenes/Workshop/Scene2';
import Scene3 from './scenes/Workshop/Scene3';

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
            debug: false
        }
    },
    scene: [
        Scene1,
        Scene2,
        Scene3
    ],
    
    
};

const game = new Phaser.Game(config);

