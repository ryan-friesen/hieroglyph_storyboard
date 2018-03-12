$( function drag() {
  $('div[type="item"]').draggable({containment: '#main-container', helper: 'clone'});
  $("#main-container").droppable({drop: function( event, ui ) {
        $( this ).html( "Dropped!" );
		$('#main-container').offset('0');
	  }                      
});
  
});