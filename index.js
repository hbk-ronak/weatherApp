function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}
titleCase("I'm a little tea pot");
$(document).ready(function() {
    navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log(lat, lon);
        var link = "https://fcc-weather-api.glitch.me/api/current?lon=" + lon +"&lat="+lat;
        $.get(link, function (data) {
            $("#temp").html(data["main"]["temp"] +" &deg; C <br>"+titleCase(data["weather"][0]["description"]));
            $('#icon').attr("src",data["weather"][0].icon);
        });
        var add = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat="+lat+"&lon="+lon;
        $.get(add, function (data) {
            $("#city").html(data["address"]["city"]);
        })
    });
    // console.log($.getJSON("https://fcc-weather-api.glitch.me/api/current?lon=longitude&lat=latitude"));
});