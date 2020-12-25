
var images =  ['images/fon.jpg', 'images/fon2.jpeg', 'images/fon3.png']
var i = 0

var Int = function swap() {
    var intro = document.getElementById('intro')
    i++;
	if(i==3) 
	{
		i = 0;
    }
    intro.style.backgroundImage = "url(" + images[i] + ")";
    intro.style.transition = 2 + "s";
}
setInterval(Int,4000);
