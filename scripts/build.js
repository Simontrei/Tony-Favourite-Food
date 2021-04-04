const fs = require('fs');
const path = require('path');

const sharp = require('sharp');

function asset(filename) {
    return path.join(__dirname + "/../assets", filename);
}
function target(filename) {
    return path.join(__dirname + "/../www/assets", filename);
}

function resizeAndMoveImg(img){

    sharp(asset(img))

    .resize(null, 200)

    .jpeg()

    .toFile(target(img))

    .catch(error => {

        console.log(error);

    });
}

// fs.copyFileSync(asset('images/soup.jpg'), target('images/soup.jpg'));

// fs.copyFileSync(asset('images/burrito.jpg'), target('images/burrito.jpg'));

// fs.copyFileSync(asset('images/fish.jpg'), target('images/fish.jpg'));

// fs.copyFileSync(asset('images/pizza.jpg'), target('images/pizza.jpg'));

// fs.copyFileSync(asset('css/style.css'), target('css/style.css'));

// fs.copyFileSync(asset('js/index.js'), target('js/index.js'));

resizeAndMoveImg('images/soop.jpg');

resizeAndMoveImg('images/brrto.jpg');

resizeAndMoveImg('images/fish.jpg');

resizeAndMoveImg('images/pezza.jpg');