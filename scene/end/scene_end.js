// 剥离代码
// var SceneEnd = function(game){
// 	var s = {
// 		game: game,
// 	}

// 	s.draw = function(){

// 		game.context.font = "16px serif";
// 		game.context.fillText("game over! press R restart" , 200, 100);
// 	}

// 	game.registerAction('r', function(){
// 		var s = Scene(game)
// 		game.replaceScene(s)
// 	})

// 	s.update = function(){

// 	}

// 	return s;
// }

// 继承GuaScene
class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function() {
            var s = Scene(game)
            game.replaceScene(s)
        })
    }
    draw() {
        this.game.context.font = "16px serif";
        this.game.context.fillText("game over! press R restart", 200, 100);
    }
}