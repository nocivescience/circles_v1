(function(undefined) {
	if(document.createElement('canvas')) {
		var Dot = function (size, color) {
			this.size = size;
			if(size < 20) {
				this.speed = 15;
			} else if(size < 30) {
				this.speed = 10;
			} else {
				this.speed = 5;
			}
			this.color = color;
			this.xpos = Math.random() * screen.availWidth - this.size;
			this.ypos = Math.random() * screen.availHeight - this.size;
			//this.ypos = 100 + 500 * (canvas.width-this.xpos)/canvas.width + 100 * Math.sin(this.offset + this.xpos / 500);
			this.offset = 100 * Math.random();
		};

		Dot.prototype.tick = function() {
			if(this.xpos > maxX) {
				this.xpos = -this.size;
				this.offset = 100 * Math.random();
			} else {
				this.xpos += this.speed;
			}

			/*if(this.ypos > maxY)
					{
						//this.ypos = 300*Math.random();
						this.ypos = -this.size;
						//this.offset = new Number(100 * Math.random());
					}
					else
					{
						this.ypos += this.speed;
					}*/
			this.ypos += this.speed;
			if(this.ypos > canvas.height) {
				//this.ypos = 300*Math.random();
				this.ypos = -this.size;
				//this.offset = new Number(100 * Math.random());
			}
			//this.ypos = 100 + 500 * (canvas.width-this.xpos)/canvas.width + 100 * Math.sin(this.offset + this.xpos / 500);
		};

		Dot.prototype.draw = function() {
			context.shadowColor = this.color;
			//context.shadowBlur = 7;
			context.fillStyle = this.color;
			context.beginPath();
			context.arc(this.xpos, this.ypos, this.size, 0, Math.PI * 2, true);
			context.closePath();
			context.fill();
			//context.fillRect(this.xpos, this.ypos, this.size, this.size);
		};

		var reDraw = function() {
			context.clearRect(0, 0, canvas.width, canvas.height);
			for(var dot in dots) {
				dots[dot].draw();
				dots[dot].tick();
			}
		};

		//document.body.style['background'] = 'url("//static.bitcasa.com/images/greenBG.jpg") no-repeat top center #1F731F';
		//gray colors
		//use colours[Math.floor(4 * Math.random())]
		//eg bit = new Bit(10 + 40 * Math.random(), colours[Math.floor(4 * Math.random())]);
		//var colours = ['#F5F5F5', '#A9A9A9', '#808080', '#303030'],
		maxX = screen.availWidth + 40;
		var canvas = document.getElementById('background');
		canvas.width = screen.availWidth;
		canvas.height = screen.availHeight;
		var context = canvas.getContext('2d');
		context.globalAlpha = 0.7;

		var dots = new Array(60);
		var dot;
		for(var i = 0; i < 60; ++i) {
			dot = new Dot(10 + 40 * Math.random(), '#' + Math.floor(Math.random() * 16777215).toString(16));
			dots[i] = dot;
		}

		setInterval(reDraw, 50);


	}
})();