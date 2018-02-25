function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype = {

	add: function(vector) {
		return new Vector(this.x + vector.x, this.y + vector.y);
	},

	update:function(x,y){
		this.x = x
		this.y = y
	},

	iAdd: function(vector) {
		this.x += vector.x;
		this.y += vector.y;
	},

	subtract: function(vector) {
		return new Vector(this.x - vector.x, this.y - vector.y);
	},

	iSubtract: function(vector) {
		this.x -= vector.x;
		this.y -= vector.y;
	},

	divideBy: function(factor) {
		return new Vector(this.x / factor, this.y / factor);
	},

	iDivideBy: function(factor) {
		this.x /= factor;
		this.y /= factor;
	},

	multiplyBy: function(factor) {
		return new Vector(this.x * factor, this.y * factor);
	},

	iMultiplyBy: function(factor) {
		this.x *= factor;
		this.y *= factor;
	},

	multiplyYBy: function(factor) {
		return new Vector(this.x, this.y * factor);
	},

	normalize: function() {
		if (this.getMagnitude() > 0) {
			return this.divideBy(this.getMagnitude());
		} else {
			return new Vector(0, 0);
		}
	},

	iNormalize: function() {
		if (this.getMagnitude() > 0) {
			this.iDivideBy(this.getMagnitude());
		}
	},

	round: function() {
		return new Vector(Math.round(this.x), Math.round(this.y));
	},

	setMagnitude: function(max) {
		return this.normalize().multiplyBy(max);
	},

	iSetMagnitude: function(max) {
		var unit = this.normalize();
		this.x = unit.x * max;
		this.y = unit.y * max;
	},

	limit: function(max) {
		if (this.getMagnitude() > max) {
			return this.setMagnitude(max);
		} else {
			return this;
		}
	},

	iLimit: function(max) {
		if (this.getMagnitude() > max) {
			this.iSetMagnitude(max);
		}
	},

	toString: function() {
		return '(' + this.x + ', ' + this.y + ')';
	},

	getAngle: function() {
		return Math.atan2(this.y, this.x);
	},
	getAngleInDegrees: function() {
		return this.getAngle() * (180 / Math.PI);
	},

	getMagnitude: function() {
		var origin = new Vector(0, 0);
		return origin.getDistance(this);
	},

	getDistance: function(vector) {
		return Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2));
	},

	iSetAngle: function(angle) {
		this.x = Math.cos(angle);
		this.y = Math.sin(angle);
	}

}
;
