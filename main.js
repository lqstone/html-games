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

var enableDebugMode = function(game, enable) {
	// body...
	if(!enable){
		return;
	}
	window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            blocks = loadLevel(game, Number(k))
        }
    })

}
// 封装
var _main = function(){
	var images = {
		ball: './img/ball.png',
		block: './img/block.png',
		paddle: './img/paddle.png',
	}
	var game = GuaGame(30, images, function(g){
		// var scene = Scene(game);
		var scene = SceneTitle(game);
		g.runWithScene(scene)
	});

	enableDebugMode(game, true)
}

_main();
