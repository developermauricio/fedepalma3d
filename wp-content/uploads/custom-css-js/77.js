<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
/* Default comment here */ 

console.log('esto es una prueba');

document.getElementById('user').addEventListener("click", function(event) {
  let span = document.createElement("span");
  span.innerHTML = "<?php echo 35 ?>";
  console.log("hola....", span);
});

/*(function($) {
	$(document).ready(function() {
      	$( "#user" ).click(function() {
  			console.log( "Handler for .click() called." );
		});
	})
})(jQuery);*/

/*$( document ).ready(function() {
    console.log( "ready!" );
  	
  	document.getElementById('user').addEventListener("click", function(event) {
  		console.log('click btn current user...');
	});
});*/
</script>
<!-- end Simple Custom CSS and JS -->
