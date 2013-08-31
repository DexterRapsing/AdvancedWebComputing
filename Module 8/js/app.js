$(function(){

    var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';


    $("#search_btn").click(function(){
        $("#result_div").fadeToggle(1000);
    });

    function search(movie_name) {
        $.ajax({
            url: server,
            dataType: 'jsonp',
            data: {
                q: movie_name,
                apiKey: 'hcrurhsttexasrgfm2y6yahm'
            },
            success: showMovies
        });

    }

    function showMovies(response) {
        console.log('response', response);
        var movies = response.movies;
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            $("#result_div").append('<h3>' + movie.title + '</h3>');
            $("#result_div").append('<img src="' + movie.posters.thumbnail + '" />');
        }
    }
    search('movie');

});
