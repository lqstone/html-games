// 增加预先载入图片功能
var GuaGame = function(fps, images, gameCallback){
	// images 是个对象，图片集
	var g= {
		images: {},
		actions: {},
		keydowns: {},
	};
	var canvas = document.querySelector('#id-canvas');
	var context = canvas.getContext('2d');
	g.canvas = canvas;
	g.context = context;
	// draw
	g.drawImage = function(guaImage){
		g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)	
	}
	//event
	window.addEventListener('keydown', function(event){
		g.keydowns[event.key] = true
	})
	window.addEventListener('keyup', function(event){
		g.keydowns[event.key] = false
	})
	g.registerAction = function (key, callback) {
		// body...
		g.actions[key] = callback
	}
	window.fps = 30;

	var runloop = function() {
		// body...
		// events 
		var actions = Object.keys(g.actions)
		for (var i = 0; i < actions.length; i++) {
			var key = actions[i];
			if(g.keydowns[key]){
				// key dowm action
				g.actions[key]()
			}
		}
		g.update();
		// clear
		g.context.clearRect(0, 0, canvas.width, canvas.height);

		// draw
		g.draw();
		setTimeout(function(){
			runloop();
		},1000/window.fps)
	}



	var loads = [];
	
	// 预先载入所有图片
	var names = Object.keys(images);
	console.log(names)
	for (let i = 0; i < names.length; i++) {
		let name = names[i];
		let path = images[name];
		let img = new Image();
      	img.src = path;
      	img.onload = function() {
      		// body...
      		g.images[name] = img;
      		loads.push(1);
      		if(loads.length == names.length){
      			g.run();
      		}
      	}
	}

	// 加载图片
	g.imageByName = function(name){
		var img = g.images[name];
		var image = {
			w: img.width,
			h: img.height,
			image: img,
		}
		console.log(image)
		return image;
	}	

	g.run = function() {
		// body...
		// game begin
		gameCallback(g)
		setTimeout(function(){
			runloop();
		},1000/window.fps)
	}

	return g;
}