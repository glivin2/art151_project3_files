// Prints out the response to various nasa some of nasa's apis
// 4.) https://api.nasa.gov/


// APOD example

function APOD_example(){

    // Set up Paramaters
    url = "https://api.nasa.gov/planetary/apod"
    key = "qgHLccVFixbbKFa9LbcY9yvSbfh6t7vnHIa6XoDq"
        // The date format is YYYY-MM-DD
    date = "2022-11-20" // The default if date is not provided is today
    start_date = "2021-09-27"
    end_date = "2022-09-27"
    count = 3
    thumbs = false
    api_key = key
    params = {"date": date,
                "api_key": key
                        }
    // api call and log response

    $.ajax({
        url: url,
        type: "GET",
        data: params,
        success: function(resp){
            console.log(resp);

            // Print the image next to the button

            // let newOBJ = document.createElement("img");
            // newOBJ.src = resp['url']
            // newOBJ.style.width = "250px"
            // const apod = document.getElementById('APOD_bin');
            // apod.appendChild(newOBJ);


        },
        error: function(error){
            console.log(error)
        }
    });
    }


// Asteroids - NeoWs example

function Asteroids_neoWs_example(){

    // Set up Paramaters

    url = "https://api.nasa.gov/neo/rest/v1/feed"
    key = "qgHLccVFixbbKFa9LbcY9yvSbfh6t7vnHIa6XoDq"
    // The date format is YYYY-MM-DD
    startDate = "2022-09-01" // Starting date for asteroid search
    endDate = "2022-9-31"   // Ending date for asteroid search
    api_key = key
    params = {"startDate": startDate,
                // "endDate": endDate,
                "api_key": key
                        }
    // api call and log response

    $.ajax({
        url: url,
        type: "GET",
        data: params,
        success: function(resp){
            console.log(resp);
        },
        error: function(error){
            console.log(error)
        }
    });
    }


// DONKI example - specifically solar flare

function DONKI_example(){
    // Set up Paramaters

    url = "https://api.nasa.gov/DONKI/FLR"
    key = "qgHLccVFixbbKFa9LbcY9yvSbfh6t7vnHIa6XoDq"
        // The date format is YYYY-MM-DD
    startDate = "2022-09-01"
    endDate = "2022-9-31"
    api_key = key
    params = {"startDate": startDate,
                "endDate": endDate,
                "api_key": key
                        }
    // api call and log response

    $.ajax({
        url: url,
        type: "GET",
        data: params,
        success: function(resp){
            console.log(resp);

            resp.forEach((item, index)=>{
                console.log(index, item["classType"])
            })
        },
        error: function(error){
            console.log(error)
        }
    });
    }

// EARTH example 

//might not work anymore
function EARTH_example(){
    // Set up Paramaters

    url = "https://api.nasa.gov/planetary/earth/imagery"
    key = "qgHLccVFixbbKFa9LbcY9yvSbfh6t7vnHIa6XoDq"
    
    lat = "41.878"
    lon = "-87.629"
    dim = 0.025     // width and height of image in degrees
    date = "2015-11-20" 	// YYYY-MM-DD
    api_key = key
    params = {"lat": lat,
                "lon": lon,
                "dim": dim,
                // "date": date,
                "api_key": key
                        }
    // api call and log response
    console.log("ran")
    $.ajax({
        url: url,
        type: "GET",
        data: params,
        success: function(resp){
            console.log(resp);

        },
        error: function(error){
            console.log(error)
        }
    });
    }


// NASA Image and Video Library

function Nasa_Image_Video_example(){
    // Set up Paramaters

    url = "https://images-api.nasa.gov/search"
    // key = "qgHLccVFixbbKFa9LbcY9yvSbfh6t7vnHIa6XoDq"
    
    q = "Red Dot"
    // api_key = key
    params = {"q": q
                        }
    // api call and log response
    $.ajax({
        url: url,
        type: "GET",
        data: params,
        success: function(resp){
            console.log(resp);
            const collection = resp["collection"]["items"];
            console.log(typeof(collection))
                collection.forEach((item, index)=>{
                    console.log(index, item["links"]["0"]["href"])
                })

        },
        error: function(error){
            console.log(error)
        }
    });
    }

