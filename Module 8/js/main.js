var key = "txkk8d53p6vt7twxqvb8p7ub";


$(function(){

  $('#searchtxt').focus(function(){
      var full = $(".divmovie43").has("img").length ? true : false;
      if(full == 'false'){
         $('.divmovie43').empty();
      }
  });


$('#searchtxt').empty();
$('#searchbtn').click(function(){ 
	if ($('#searchtxt').val() == '') {
			$('h3').replaceWith('<h3> Please fill out the search field </h3>')
			$('h3').css({color: 'red'});
			$('.divmovie43').replaceWith($('<div class = ".divmovie43"</div>'));
		} 
	else{
		$('h3').replaceWith('<h3> Searching "' + $('#searchtxt').val() + '". Please wait...</h3>')
		search();
	}
   
 });
$('#searchtxt').keydown(function(event){
		if (event.which == 13) {
			$('#searchbtn').click();
		};
	});

  function search() {
        $.ajax({
            url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json',
            dataType: 'jsonp',
            data: {
                q: $("#searchtxt").val(),
                apiKey: 'txkk8d53p6vt7twxqvb8p7ub'
            },

            success: showList
            
        });

     }


    function showList(response) {
        console.log('response', response);
        var movies = response.movies;
        $('#movie43').replaceWith('<div id="movie43"></div>');
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            /**$('#page_three').append('<h3>' + movie.title + '</h3>');**/

            $('#movie43').append(
             '<div id = "post1"><div class = "innerdiv"><img id = "thumb" src="' + movie.posters.original + '" /></div><div class = "innerdiv"><h6> '+ movie.title +'</h6></div></div>');
           
        }
    }
         
});
