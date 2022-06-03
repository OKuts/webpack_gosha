import './sass/main.scss'
import horse from './assets/horse.jpg'
import large from './assets/large.png'

const hello = require('./js/hello')

document.getElementById('img1').src = horse
document.getElementById('img1').style.width = '50%'

document.getElementById('img2').src = large
document.getElementById('img2').style.width = '50%'