var twoEight = document.getElementById('twoeight');
var four = document.getElementById('fouro');
var fiveSix = document.getElementById('fivesix');
var eight = document.getElementById('eighto');
var eleven = document.getElementById('eleveno');
var modalImg = document.getElementById('mainimg');

twoEight.onclick = function() {
    modalImg.src = '../img/Aperture/28.jpg';
    console.log(modalImg)
}
four.onclick = function() {
    modalImg.src = '../img/Aperture/40.jpg';
}
fiveSix.onclick = function() {
    modalImg.src = '../img/Aperture/56.jpg';
}
eight.onclick = function() {
    modalImg.src = '../img/Aperture/80.jpg';
}
eleven.onclick = function() {
    modalImg.src = '../img/Aperture/110.jpg';
}