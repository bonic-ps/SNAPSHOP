const express = require('express');
const axios = require('axios'); 
let app = express();
let cors = require('cors');
app.use(cors({origin: "http://localhost:3001", methods: "GET"}))


app.get('/', (req, res) => {
console.log(req.query)
    console.log("This endpoint is triggered")
    // axios.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=cats&per_page=5') //'https://www.flickr.com/services/api/flickr.photos.search.html?api_key=put your api key here&tags=dogs')
    // .then(result => {
    //     // console.log(result);
    //     // console.log("pppppppppppppppppppppppppppppppppppppppfffffffffffffffffffffffttttttttttttttttt");
    //     // console.log(result.data);

    //     // res.json({message : "Data received from backend", Data: result.status })

    //     const jsonResponseString = result.data;
    //     const openingParenIndex = jsonResponseString.indexOf('(');
    //     const closingParenIndex = jsonResponseString.lastIndexOf(')');
    //     console.log(result.data); console.log("-----------------------------------------")
    //     if (openingParenIndex !== -1 && closingParenIndex !== -1) {
    //       // Extract the JSON data within the parentheses
    //       const jsonDataString = jsonResponseString.substring(openingParenIndex + 1, closingParenIndex);
    //       console.log("*************************************************************************")
    //       // Parse the JSON data
    //       console.log(jsonDataString)
    //       const jsonData = JSON.parse(jsonDataString);
          
    //       let itemArr = jsonData.items;
    //       let singleItem = itemArr[0];
          
    //       console.log(singleItem.media.m);
    //       // Now you can access properties of the JSON data
    //     //   console.log(jsonData.title);
    //     //   console.log(jsonData.items);
    //       console.log("//////////////////////////////////////////////////////////////////////");
    //       console.log(jsonData); console.log(jsonData.items[1].media.m)
    //     } else {
    //       console.error("JSONP response format is not as expected.");
    //     }






    // })








// axios.get('https://api.flickr.com/services/feeds/photos_public.gne?&tags=cats&format=json&jsoncallback=1')// we have to specify the format
// .then(response => {         // or else it will return xml data by default.
// console.log(response);
// response
// })
// .then

let imageUrls = [];
  axios.get(`https://api.flickr.com/services/feeds/photos_public.gne?&tags=${req.query.search}&format=json&safe_search=1`)
  .then(response => { // provide "nojsoncallback=1" to get direct json response instead of jsonp.
    
    //console.log(response)
  if(response.status = 200){
    const data = JSON.parse(response.data.replace(/^jsonFlickrFeed\(/, '').replace(/\)\s*;?\s*$/, ''));
    // console.log(data);
    let result_arr = data.items; // gives the array of objects that denote the search result items.

  // store all the image links in the imageurls array.
    for(each of result_arr){
      imageUrls.push(each.media.m)
    }
    console.log(imageUrls); 

    res.json({message: "data received from the server", Data: imageUrls})
  }
  else{
    res.json({message: "couldnt get the requestd data"})
  }
  })
  .catch(error => {
    console.error(error);
  });






})

app.listen(3000,()=> {
    console.log("server is listening at the port 3000")
})




