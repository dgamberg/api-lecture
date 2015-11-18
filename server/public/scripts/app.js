$(document).ready(function() {
    $('#searchButton').on('click', function(){
        $('#outputContainer').empty();
        var searchTerm = $('#searchTerm').val();
        gameSearch(searchTerm);
    })
});

function gameSearch(searchItem) {
    var apikey = "aa3066b97cf3e38461c8b09cc5f4b595daa7f6b8";
    var baseUrl = "http://www.giantbomb.com/api";

    // construct our URL
    var gameSearchURL = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=50';
    var query = searchItem;

    var q = gameSearchURL + '&query=' + encodeURI(query);
    console.log(q);

    $.ajax({
        type: "GET",
        url: gameSearchURL + '&query=' + encodeURI(query),
        dataType: "jsonp",
        crossDomain: true,
        jsonp: 'json_callback',
        success: function(data) {
            updateDOM(data);
            console.log(data);
        }
    });
}

function updateDOM(data){
    for(var i = 0; i < data.results.length; i++){
        var output = "<div class='well'>" +
                "<h3>" + data.results[i].name +  "</h3>" +
                "<h5>" + data.results[i].deck + "</h5>" +
                "<a target='blank' href='" + data.results[i].api_detail_url + "'><img src ='" + data.results[i].image.screen_url + "'></a>" +
                "<p>" + data.results[i].original_release_date + "</p>" +
                //"<p>" + data.results[i].description + "</p>" +
                "</div>";
        $('#outputContainer').append(output);
    }
}