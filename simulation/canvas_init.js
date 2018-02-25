function isCanvasSupported() {
  var elem = document.createElement( 'canvas' );
  return ! ! ( elem.getContext && elem.getContext( '2d' ) );
}

function checkForCanvasSupport() {
	if ( ! isCanvasSupported() ) {
		$( 'div#container' ).hide();

		var canvasNotice$ = jQuery( '<div id="canvas_notice">Please update your browser to view this experiment.</div>' );
		canvasNotice$.insertAfter( $( 'div#header_wrapper' ) );

		return false;
	} else {
		return true;
	}
}

function resizeCanvas( width, height ) {
	var canvas$ = $( 'canvas' );

	if ( 'undefined' == typeof( height ) ) {
		height = $('.giphy-embed').width();
	}
	canvas$.attr( 'height', height );

	if ( 'undefined' == typeof( width ) ) {
		width = $('.giphy-embed').width();
	}
	canvas$.attr( 'width', width );

	// Adjust the dimensions of the canvas and position the click notice

	// Setting the height affects the window width so we can't group the attribute changes

	var clickNotice$ = $( 'div#click_notice' );
	clickNotice$.css( {
		left: ( canvas$.width() - clickNotice$.width() ) / 2,
		top: ( canvas$.height() - clickNotice$.height() - 5 )
	} );
}
;
