// Prints out the open ai's api response to console
// 2.) https://openai.com/api/
"Not allowed to GET on /v1/images/generations. (HINT: Perhaps you meant to use a different HTTP method?)"



url = "https://api.openai.com/v1/images/generations"
key = "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"


params = {"prompt": "a white siamese cat",
            "n": 1,
            "size": "1024x1024"
                    }

// fun api call and log response
function makeApiCall(){
$.ajax({
    url: url,
    type: "GET",
    Content: "application/json",
    Authorization: key,
    data: params,
    success: function(resp){
        console.log(resp);
    },
    error: function(error){
        console.log(error)
    }
});
}