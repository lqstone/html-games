// 弹球
var Ball = function(game) {
	var o = game.imageByName('ball');
	o.x = 100;
	o.y = 200;
	o.speedX = 5;
	o.speedY = 5;
	o.fired = false;

	o.fire = function(){
		o.fired = true
	}
	o.move = function() {
		if(o.fired){
			o.x += o.speedX
			o.y += o.speedY
			// 运动方向
			if(o.x < 0 || o.x > 400 - o.image.width){
				o.speedX *= -1;
			}
			if(o.y < 0 || o.y > 300 - o.image.height){
				o.speedY *= -1;
			}
			// console.log(o.y)
		}
	}
	o.fantan = function() {
		o.speedY *= -1;
	}

	o.hasPoint = function(x, y){
		var xIn = x >= o.x && x <= o.x + o.w;
		var yIn = y >= o.y && y <= o.y + o.h;
		return xIn && yIn;
	}

	return o;
}