var key = "txkk8d53p6vt7twxqvb8p7ub";


$(function(){

  $('input').focus(function(){
      var full = $(".divmovie43").has("img").length ? true : false;
      if(full == 'false'){
         $('.divmovie43').empty();
      }
  });


$("input").empty();
$("button").click(function(){ 
    search();
 });

  function search() {
        $.ajax({
            url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json',
            dataType: 'jsonp',
            data: {
                q: $("input").val(),
                apiKey: key,
            },
            success: showList
        });

     }

function boxMovie(){
		var server = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json';
		$.ajax({
			url: server,
			dataType: 'jsonp',
			data: {
				apikey: key,
				limit: 10,
				country: 'ph'
			},
			success: showMovies
		});
	}
	
	//In Theaters Movies
	function intMovie(){
		var server = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
		$.ajax({
			url: server,
			dataType: 'jsonp',
			data: {
				apikey: key,
				page_limit: 10,
				page: pageNum,
				country: 'ph'
			},
			success: showMovies
		});
	}

	function upMovie(){
		var server = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json';
		$.ajax({
			url: server,
			dataType: 'jsonp',
			data: {
				apikey: key,
				page_limit: 10,
				country: 'ph'
			},
			success: showMovies
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
              '<div id = "post1"><div class = "innerdiv"><img id = "thumb" src="' + movie.posters.original + '" /></div><div class = "innerdiv"><h5> '+ movie.title +'</h5></div></div>');
            
           
        }
    }
         
});
