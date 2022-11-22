// Prints out the open weather map api response to console
// https://openweathermap.org/api



// build params
    url = "https://api.openweathermap.org/data/2.5/weather?"
    weatherKey = "6895f508d6b179d3b88d1cda4bcf0898"
    lat = "41.8781" // lat and lon for chicago
    lon = "-87.6298" // use negative for west

    weatherParams = {"lat": lat,
                        "lon": lon,
                        "appid": weatherKey
                        }

// fun api call and log response
function makeApiCall(){
    $.ajax({
        url: url,
        type: "GET",
        data: weatherParams,
        success: function(resp){
            console.log(resp);
        },
        error: function(error){
            console.log(error)
        }
    });
}