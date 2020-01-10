var images = [
	'1.png',
	'2.png',
	'4.png',
	'3.png',
	'5.png',
	'6.png',
	'7.png',
	'8.png'
];
 
var length = images.length;
var rand = Math.floor(length*Math.random());
document.getElementById('target').src="" + images[rand];
