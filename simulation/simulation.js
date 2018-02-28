var NUM_BOIDS = 60;
var REFRESH_INTERVAL_IN_MS = 15;
var mouse_position = new Vector(0,0);

function Simulation(name) {
	var canvas = document.getElementById(name);
	var canvas$ = $(canvas);

	this.ctx = canvas.getContext('2d');
	this.canvasHeight = canvas$.height();
	this.canvasWidth = canvas$.width();
	this.separationMultiplier = 2;
	this.cohesionMultiplier = 1;
	this.alignmentMultiplier = 1;
	this.avoid_mouse = false;
}

Simulation.prototype = {
	initialize: function(use_obstacle,avoid_mouse) {
		this.obstacles = [];
		if (use_obstacle){
			this.addObstacle(new Obstacle(this.canvasWidth / 2,this.canvasHeight / 2,40,2,this))
		}
		this.avoid_mouse = avoid_mouse
		this.boids = [];
		for(var i = 0; i < NUM_BOIDS; i++) {
			var boid = new Boid(this.canvasWidth / 4,  this.canvasHeight / 4, this);
			this.addBoid(boid);
		}
	},
	addBoid: function(boid) {
		this.boids.push(boid);
	},
	addObstacle: function(obstacle) {
		this.obstacles.push(obstacle);
	},
	render: function() {
		this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

		for(var bi in this.boids) {
			this.boids[bi].run(this.boids);
		}
		for(var ob in this.obstacles) {
			this.obstacles[ob].render(this.obstacles);
		}
	},
	tick: function() {
		for(var bi in this.boids) {
			var boid = this.boids[bi];
			if (boid.death_throws == 0){
				boid.flock(this.boids);
				for(var ob in this.obstacles){
					var obstacle = this.obstacles[ob];
					if (boid.position.getDistance(obstacle.position) < boid.render_size + obstacle.radius ){
						this.boids[bi].set_death_throws();
					}
				}
			}else if (boid.death_throws == 1){
				this.boids.splice(bi, 1);
			}else{
				this.boids[bi].decrease_death_throws();
			}
		}


	},
	run: function() {
		var self = this;
		self.tick();
		setInterval(function() {
			self.tick();
			self.render();
		}, REFRESH_INTERVAL_IN_MS);
	},

	update_mouse_position: function(x, y){
		mouse_position.update(x,y);
	},

	update_sabateurs: function(v){
		for(var bi in this.boids) {
			this.boids[bi].set_sabateur(parseInt(bi) < parseInt(v))
		}
	},

	update_separationMultiplier: function(value){
		this.separationMultiplier = value;
	},

	update_cohesionMultiplier: function(value){
		this.cohesionMultiplier = value;
	},

	update_alignmentMultiplier: function(value){
		this.alignmentMultiplier = value;
	},
}
;
