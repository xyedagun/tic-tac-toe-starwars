
$(document).ready(function() {

var darthVader = "darthVader"; //player Darth Vader
var yoda = "yoda"; //player Yoda
var count = 0; 
var darthWins = 0;
var yodaWins = 0;


//function that executes upon click on image on the list
$('#gameboard li img').click(function(){

	//Winning combinations for Darth Vader

	if ($("#square1").hasClass('darthVader') && $("#square2").hasClass('darthVader') && $("#square3").hasClass('darthVader') || //parallel combination 1
  	$("#square4").hasClass('darthVader') && $("#square5").hasClass('darthVader') && $("#square6").hasClass('darthVader') || 	 //parallel combination 2
  	$("#square7").hasClass('darthVader') && $("#square8").hasClass('darthVader') && $("#square9").hasClass('darthVader') || 	 //parallel combination 3
  	$("#square1").hasClass('darthVader') && $("#square4").hasClass('darthVader') && $("#square7").hasClass('darthVader') || 	 //horizontal combination 1
  	$("#square2").hasClass('darthVader') && $("#square5").hasClass('darthVader') && $("#square8").hasClass('darthVader') || 	 //horizontal combination 2
  	$("#square3").hasClass('darthVader') && $("#square6").hasClass('darthVader') && $("#square9").hasClass('darthVader') || 	 //horizontal combination 3
  	$("#square1").hasClass('darthVader') && $("#square5").hasClass('darthVader') && $("#square9").hasClass('darthVader') || 	 //diagonal combination 1
  	$("#square3").hasClass('darthVader') && $("#square5").hasClass('darthVader') && $("#square7").hasClass('darthVader'))		 //diagonal combination 2
  {
   alert('Darth Vader wins! You underestimated the POWER of the DARK side!')
    $("#gameboard li img").attr('src', 'images/square.jpg');
	$("#gameboard li").removeClass('disarm')
	$("#gameboard li").removeClass('yoda')
	$("#gameboard li").removeClass('darthVader')
  }

  //Winning combinations for Player Yoda

	else if ($("#square1").hasClass('yoda') && $("#square2").hasClass('yoda') && $("#square3").hasClass('yoda') || //parallel combination 1
		$("#square4").hasClass('yoda') && $("#square5").hasClass('yoda') && $("#square6").hasClass('yoda') || //parallel combination 2
		$("#square7").hasClass('yoda') && $("#square8").hasClass('yoda') && $("#square9").hasClass('yoda') || //parellel combination 3
		$("#square1").hasClass('yoda') && $("#square4").hasClass('yoda') && $("#square7").hasClass('yoda') || //horizontal combination 1
		$("#square2").hasClass('yoda') && $("#square5").hasClass('yoda') && $("#square8").hasClass('yoda') || //horizontal combination 2
		$("#square3").hasClass('yoda') && $("#square6").hasClass('yoda') && $("#square9").hasClass('yoda') || //horizontal combination 3
		$("#square1").hasClass('yoda') && $("#square5").hasClass('yoda') && $("#square9").hasClass('yoda') || //diagonal combination 1
		$("#square3").hasClass('yoda') && $("#square5").hasClass('yoda') && $("#square7").hasClass('yoda'))   //diagonal combination 2
   {
	 alert('Yoda wins! If no mistake you have made, losing you are. A different game you should play.')
	 $("#gameboard li img").attr('src', 'images/square.jpg');
	 $("#gameboard li").removeClass('disarm')
	 $("#gameboard li").removeClass('yoda')
	 $("#gameboard li").removeClass('darthVader')

   }
  
  else if (count == 9)
  {
	alert('Its a tie. Play again.')
	$("#gameboard li").attr("img", "images/square.jpg");
	$("#gameboard li").removeClass('disarm')
	$("#gameboard li").removeClass('yoda')
	$("#gameboard li").removeClass('darthVader')

	count = 0
  }
  else if ($(this).hasClass('disarm'))
  {
    alert('Already selected')
  }
  else if (count%2 == 0)
  {
	  count++ //add it to count
	  $(this).attr("src", "images/yoda.jpg") //change attribute source to yoda image
      $(this).addClass('disarm yoda')
	    if ($("#square1").hasClass('yoda') && $("#square2").hasClass('yoda') && $("#square3").hasClass('yoda') || //parallel combination 1
	    	$("#square4").hasClass('yoda') && $("#square5").hasClass('yoda') && $("#square6").hasClass('yoda') || //parallel combination 2
	    	$("#square7").hasClass('yoda') && $("#square8").hasClass('yoda') && $("#square9").hasClass('yoda') || //parallel combination 3
	    	$("#square1").hasClass('yoda') && $("#square4").hasClass('yoda') && $("#square7").hasClass('yoda') || //horizontal combination 1
	    	$("#square2").hasClass('yoda') && $("#square5").hasClass('yoda') && $("#square8").hasClass('yoda') || //horizontal combination 2
	    	$("#square3").hasClass('yoda') && $("#square6").hasClass('yoda') && $("#square9").hasClass('yoda') || //horizontal combination 3
	    	$("#square1").hasClass('yoda') && $("#square5").hasClass('yoda') && $("#square9").hasClass('yoda') || //diagonal combination 1
	    	$("#square3").hasClass('yoda') && $("#square5").hasClass('yoda') && $("#square7").hasClass('yoda'))	  //diagonal combination 2
	    {
	    //winning combination is validated
	   alert('Yoda wins! If no mistake you have made, losing you are. A different game you should play.')
	   count = 0;
	   yodaWins++; //adds to Yoda's wins counter
	   $('#yodaScore').text(yodaWins)
        }
  }
   else  
  {
	count++
    $(this).attr("src", "images/darth-vader.jpg")
    $(this).addClass('disarm darthVader')
    	//this is to check the combinations
	   if ($("#square1").hasClass('darthVader') && $("#square2").hasClass('darthVader') && $("#square3").hasClass('darthVader') || //parallel combination 1
	   	$("#square4").hasClass('darthVader') && $("#square5").hasClass('darthVader') && $("#square6").hasClass('darthVader') || //parallel combination 2
	   	$("#square7").hasClass('darthVader') && $("#square8").hasClass('darthVader') && $("#square9").hasClass('darthVader') || //parallel combination 3
	   	$("#square1").hasClass('darthVader') && $("#square4").hasClass('darthVader') && $("#square7").hasClass('darthVader') || //horizontal combination 1
	   	$("#square2").hasClass('darthVader') && $("#square5").hasClass('darthVader') && $("#square8").hasClass('darthVader') || //horizontal combination 2
	   	$("#square3").hasClass('darthVader') && $("#square6").hasClass('darthVader') && $("#square9").hasClass('darthVader') || //horizontal combination 3
	   	$("#square1").hasClass('darthVader') && $("#square5").hasClass('darthVader') && $("#square9").hasClass('darthVader') || //diagonal combination 1
	   	$("#square3").hasClass('darthVader') && $("#square5").hasClass('darthVader') && $("#square7").hasClass('darthVader'))	//diagonal combination 2
        {
	 //winning combination is validated
	 alert('Darth Vader wins! You underestimated the POWER of the DARK side!')
	 count = 0;
	 darthWins++; //adds to Darth's wins counter
	 $('#darthScore').text(darthWins)
        }
  }

   });
    $("#reload").click(function () {
    	//on reset click, clears the gameboard
	    $("#gameboard li img").attr("src", "images/square.jpg");
		$("#gameboard li img").removeClass('disarm')
		$("#gameboard li img").removeClass('yoda')
		$("#gameboard li img").removeClass('darthVader')

		count = 0

  });
});

