var two = document.getElementById('two');
var sixty = document.getElementById('sixty');
var twoFifty = document.getElementById('twoFifty');
var thousand = document.getElementById('thousand');
var fourThousand = document.getElementById('fourThousand');
var modalImg = document.getElementById('mainimg');

two.onclick = function() {
    modalImg.src = '../img/Shutter/12.jpg';
    console.log(modalImg)
}
sixty.onclick = function() {
    modalImg.src = '../img/Shutter/160.jpg';
}
twoFifty.onclick = function() {
    modalImg.src = '../img/Shutter/1250.jpg';
}
thousand.onclick = function() {
    modalImg.src = '../img/Shutter/11000.jpg';
}
fourThousand.onclick = function() {
    modalImg.src = '../img/Shutter/14000.jpg';
}