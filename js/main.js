var loadLevel = function(game, n) {
	// body...
	n = n - 1;
	var level = levels[n];
	window.blocks = [];
	for (var i = 0; i < level.length; i++) {
		var p = level[i];
		// 设置每个的坐标
		var b = Block(game, p);
		blocks.push(b);
	}
	return blocks;
}

var enableDebugMode = function(enable) {
	// body...
	if(!enable){
		return;
	}

}
	var paused = false;
// 封装
var _main = function(){
	var images = {
		ball: './img/ball.png',
		block: './img/block.png',
		paddle: './img/paddle.png',
	}
	var game = GuaGame(30, images, function(g){
		var scene = Scene(game);
		window.addEventListener('keydown', function(event){
			if(event.key == 'p'){
				paused = !paused;
			}	
			if('12346789'.includes(event.key)){
				blocks = loadLevel(game, event.key);
			}
		})
		game.update = function(){
			if(paused){
				return;
			}
			// 调用scene的update
			scene.update();
		}
		game.draw = function(){
			// s.draw
			scene.draw();
		}
	});
}

_main();
