//set up jquery
$(document).ready(function(){
	
$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 300
});	

/*	var trigger = $("a"),
		container = $('main');
	
	trigger.on('click', function(){
		
		var $this = $(this),
			target = $this.data('target');
		
		console.log(target);
		container.load(target + '.html');
		
		return false;
		
	});*/

});