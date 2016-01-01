/**
 * 
 */

var left = 0;
var speed = 5;

window.addEventListener('load', function() {
	var meteorite = document.getElementById('target');
	var style = window.getComputedStyle(meteorite);
	var rocket = document.getElementById('rocket');
	var width = window.innerWidth;
	var rocketWidth = 122;
	var bullets = document.getElementById('bullets');
	var fire = false;
	var bulletsSum = new Array(100);
	var bulletsLeft = document.getElementById('bullets_left_sum');
	var points = 0;
	var pointsSum = document.getElementById('points_sum');
	document.addEventListener('keydown', function(event) {
			if (event.keyCode == 37 && left > 0) {
				left -= speed;
			}
			
			if (event.keyCode == 39 && left < width - rocketWidth) {
				left += speed;
			}			
	}, false);
	
	document.addEventListener('keypress', function(event) {
		if (event.keyCode == 32) {
			fire = true;
			bulletsSum.pop();
		}
	}, false);
	
	document.addEventListener('keyup', function(event) {
		if (event.keyCode == 32) {
			fire = false;
		}
	}, false);
	
	setInterval(function() {		
		rocket.style.left = left + "px";
		bullets.style.left = parseInt(rocket.style.left) + 56 + "px";
		if (fire) {
			bullets.style.visibility = "visible";
		} else {
			bullets.style.visibility = "hidden";
		}
		bulletsLeft.innerHTML = bulletsSum.length;
		
		if ((parseInt(style.left) === parseInt(bullets.style.left) ||
			parseInt(style.left) === parseInt(bullets.style.left) - 1 ||
			parseInt(style.left) === parseInt(bullets.style.left) - 2 ||
			parseInt(style.left) === parseInt(bullets.style.left) - 3 ||
			parseInt(style.left) === parseInt(bullets.style.left) - 4 ||
			parseInt(style.left) === parseInt(bullets.style.left) - 5 ||
			parseInt(style.left) === parseInt(bullets.style.left) - 6 ||
			parseInt(style.left) === parseInt(bullets.style.left) - 7 ||
			parseInt(style.left) === parseInt(bullets.style.left) - 8 ||
			parseInt(style.left) === parseInt(bullets.style.left) - 9 ||
			parseInt(style.left) === parseInt(bullets.style.left) - 10 ||
			parseInt(style.left) === parseInt(bullets.style.left) - 11) &&
			(fire === true)) {
			points += 1;
		}
		
		pointsSum.innerHTML = points;
		
		if (points == 70) {
			document.getElementById('win').style.visibility = 'visible';
			document.getElementById('win_message').style.visibility = 'visible';
		}
		
		if (bulletsSum.length == 0) {
			document.getElementById('loose').style.visibility = 'visible';
			document.getElementById('loose_message').style.visibility = 'visible';
		}
		
	}, 1000/30);

	
}, false);