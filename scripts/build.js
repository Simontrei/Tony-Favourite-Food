const fs = require('fs');
const path = require('path');

function asset(filename) {
    return path.join(__dirname + "/../assets", filename);
}

function target(filename) {
    return path.join(__dirname + "/../www/assets", filename);
}

fs.copyFileSync(asset('images/soup.jpg'), target('images/soup.jpg'));
fs.copyFileSync(asset('images/burrito.jpg'), target('images/burrito.jpg'));
fs.copyFileSync(asset('images/fish.jpg'), target('images/fish.jpg'));
fs.copyFileSync(asset('images/pizza.jpg'), target('images/pizza.jpg'));
fs.copyFileSync(asset('css/style.css'), target('css/style.css'));
fs.copyFileSync(asset('js/index.js'), target('js/index.js'));
//fs.copyFileSync(asset('js/jquery.js'), target('js/jquery.js'));
//fs.copyFileSync(asset('js/lodash.js'), target('js/lodash.js'));