function isCanvasSupported() {
	var elem = document.createElement('canvas');
	return ! !(elem.getContext && elem.getContext('2d'));
}

function checkForCanvasSupport() {
	if (!isCanvasSupported()) {
		$('div#container').hide();

		var canvasNotice$ = jQuery('<div id="canvas_notice">Please update your browser to view this experiment.</div>');
		canvasNotice$.insertAfter($('div#header_wrapper'));

		return false;
	} else {
		return true;
	}
}

function resizeCanvas(width, height) {
	var canvas$ = $('canvas');

	if ('undefined' == typeof (height)) {
		height = document.getElementById("starling_gif").height;
	}
	canvas$.attr('height', height);

	if ('undefined' == typeof (width)) {
		width = document.getElementById("starling_gif").width;
		console.log(document.getElementById("starling_gif").width)
	}
	canvas$.attr('width', width);

}
;
