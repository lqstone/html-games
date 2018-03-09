// 剥离代码
var Scene = function(game){
	var s = {
		game: game,
	}
	var paddle = Paddle(game);
	var ball = Ball(game);
	var score = 0;
	// 循环很多砖块
	window.blocks = loadLevel(game, 1);
	s.draw = function(){
		game.drawImage(paddle);
		game.drawImage(ball);
		for (var i = 0; i < blocks.length; i++) {
			var block = blocks[i];
			if(block.alive){
				game.drawImage(block);
			}
		}
		game.context.font = "16px serif";
		game.context.fillText("score: " + score, 20, 280);
	}
	// var paused = false;
	game.registerAction('a', function(){
		paddle.moveLeft()
	})
	
	game.registerAction('d', function(){
		paddle.moveRight()
	})
	
	game.registerAction('f', function(){
		ball.fire()
	})
		
	s.update = function(){
		ball.move()
		// 判断球和板子相撞
		if(paddle.collide(ball)) {
			ball.fantan();
		}
		// 判断球和砖块 [数组]
		for (var i = 0; i < blocks.length; i++) {
			var block = blocks[i];
			if(block.collide(ball)){
				block.kill();
				ball.fantan();
				// score 更新
				if(!block.alive){
					score += 10;
				}
			}
		}
	}

	var enableDrag = false;
	game.canvas.addEventListener('mousedown', function(e){
		var x = e.offsetX;
		var y = e.offsetY;
		console.log('mousedown', e);
		// 需要检查是否点中了ball
		if(ball.hasPoint(x, y)){
			// 设置拖拽状态
			console.log("点中了")
			enableDrag = true;
		}
	})

	game.canvas.addEventListener('mousemove', function(e){
		var x = e.offsetX;
		var y = e.offsetY;
		if(enableDrag){
			ball.x = x;
			ball.y = y;
		}
		// console.log('mousemove', e);
	})
	game.canvas.addEventListener('mouseup', function(e){
		var x = e.offsetX;
		var y = e.offsetY;
		enableDrag = false;
		console.log('up', e);
	})

	return s;
}









