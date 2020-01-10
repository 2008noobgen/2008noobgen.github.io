var images = [
	'1.png',
	'2.png',
	'4.png',
	'3.png'
];
 
var length = images.length;
var rand = Math.floor(length*Math.random());
document.getElementById('target').src="" + images[rand];