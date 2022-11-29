function makeAPICall(){
    url = "https://external.transitapp.com/v3/public/nearby_stops"
    key = "9dd5ae285e2ce9846b753b975c3af799eafe8ce2f34d756415ca221437a3962f"
    // lat = sessionStorage.getItem("lat") 
    // lon = sessionStorage.getItem("lon") 
    lat = 45.526168077787894
    lon = -73.59506067289408
    transitParams = {"lat": lat,
                        "lon": lon,
                        // "apiKey": key
                        }
    console.log(transitParams)


    $.ajax({
        url: url,
        type: "GET",
        apiKey: key,
        data: transitParams,
        // contentType: "application/json",
        success: function(resp){
            // changeDisplay(resp);
            console.log(resp);
        },
        error: function(error){
            console.log(error)
        }
    });
}
