$(function() {
				$('.movediv').hover(
					function(){
						$(this).animate({left: '-=10px'}, 200);
						},
					function(){
						$(this).animate({left: '+=10px'}, 200);
					}
				);				
       });