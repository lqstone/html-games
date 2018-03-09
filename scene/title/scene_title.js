// 
var SceneTitle = function(game){
	var s = {
		game: game,
	}
	
	s.draw = function(){
		game.context.font = "16px serif";
		game.context.fillText("press K  game begin! " , 200, 100);
	}
	
	game.registerAction('k', function(){
		var s = Scene(game)
		game.replaceScene(s)
	})

	
		
	s.update = function(){
		
	}

	return s;
}
