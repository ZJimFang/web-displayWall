var h_div2 = document.getElementById('cc');
var h_hvttop = 200;
window.onscroll = function () {
HoverTreeMove(h_div2, h_hvttop)

//顯示信息
var h_scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//滾動的距離
var h_hovertree = document.getElementById('hovertree'); 
h_hovertree.innerHTML = h_div1.offsetTop + " hovertree<br /> " + h_scrollTop + "<br />" + h_div1.style.top;

};



function HoverTreeMove(obj,top)
{
var h_scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//滾動的距離
var h_buchang = 20;
if (obj.offsetTop < h_scrollTop + top - h_buchang)
{
obj.style.top = obj.offsetTop + h_buchang + "px";
setTimeout(function () { HoverTreeMove(obj, top); }, 80);

}
else if (obj.offsetTop > h_scrollTop + top + h_buchang)
{
obj.style.top = (obj.offsetTop - h_buchang) + "px";
setTimeout(function () { HoverTreeMove(obj, top); }, 80);
}
else {
obj.style.top = h_scrollTop + top + "px";
}
}

HoverTreeMove(h_div2, 200)