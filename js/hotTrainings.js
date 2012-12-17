 $(function() {
    	$( "#button" ).button();
    	var icons={
    		
    		header: "ui-icon-plus",
    		activeHeader:"ui-icon-minus"
    	};
        $( "#accordion" )
            .accordion({
                header: "> div > h3",collapsible: true,active:false, heightStyle:"content",
                icons:icons
            });
            var i=0;
            $( document ).tooltip();
            $( ".openclose" ).show(400);
            $( '.ui-accordion-header-icon' ).removeClass( "ui-icon-plus" );
            $( '.ui-accordion-header-icon' ).addClass( "ui-icon-minus" );
            var y=0;
            $("#button").click(function() {
            	//alert(y);
            		//$( "#button" ).text("Close all");
				if (y==0)
				{
				$( '.ui-accordion-header-icon' ).addClass( "ui-icon-plus" );
           		$( '.ui-accordion-header-icon' ).removeClass( "ui-icon-minus" );
					y=1;
					
				}
				else if (y==1)
				{
					
						$( '.ui-accordion-header-icon' ).addClass( "ui-icon-minus" );
						$( '.ui-accordion-header-icon' ).removeClass( "ui-icon-plus" );
           		y=0;
					
				}
           		
            	//$( '.ui-accordion-header-icon' ).removeClass( "ui-icon-plus" );
            	$( ".openclose" ).toggle(400);
            	$( ".time" ).toggle(400);
            	
   			
			}
			
			
			);
			
			$(".star li").hover(
				function() {
            	
            	$( this ).addClass( "ui-state-hover" );
   			
			},function() {
            	
            	//$( this ).addClass( "ui-state-hover" );
   			$( this ).removeClass( "ui-state-hover" );
			}
			
			);
           // $( ".ui-accordion-content" )
      
    })