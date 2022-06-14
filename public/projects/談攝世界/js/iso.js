var iso1 = document.getElementById('one');
var iso4 = document.getElementById('four');
var iso16 = document.getElementById('onesix');
var iso64 = document.getElementById('sixfour');
var iso256 = document.getElementById('twofivesix');
var modalImg = document.getElementById('mainimg');

iso1.onclick = function() {
    modalImg.src = '../img/ISO/100.jpg';
    console.log(modalImg)
}
iso4.onclick = function() {
    modalImg.src = '../img/ISO/400.jpg';
}
iso16.onclick = function() {
    modalImg.src = '../img/ISO/1600.jpg';
}
iso64.onclick = function() {
    modalImg.src = '../img/ISO/6400.jpg';
}
iso256.onclick = function() {
    modalImg.src = '../img/ISO/25600.jpg';
}