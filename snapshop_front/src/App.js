import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() { 
    let [imgUrl, setImgUrl] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:3000')
    //     .then(response => {
    //         // console.log(response); 
    //         // console.log(response.data.Data) // To get the imageUrl array.
    //         setImgUrl(response.data.Data); console.log(imgUrl, "sup");
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });

    // },[]);

    useEffect(() => {
        console.log(imgUrl);
      }, [imgUrl]);

    function handleClick(event){
        let searchInput = document.getElementById('searchInput').value;
        // console.log(searchInput.value)
        if(searchInput){
            axios.get(`http://localhost:3000?search=${searchInput}`)
            .then(response => {
                // console.log(response); 
                // console.log(response.data.Data) // To get the imageUrl array.
                setImgUrl(response.data.Data); console.log(imgUrl, "sup");
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }

 return (
    <div className="App">
      <h1>SNAPSHOT</h1>
      <input type="text" placeholder="search" id='searchInput' />
      <button id='button' onClick={handleClick}>Search</button>
      <div className='grid-container'>{imgUrl && imgUrl.map((url, index) => {
        return <img key={index} src={url} alt={`Image ${index}`} width={"200px"} height={"200px"} className='IMGS grid-items'/>
      })}</div>
    </div>
    );
    
  }
  export default App;









// import './App.css';
// import jsonp from 'jsonp';
// import React, { useState } from 'react';


// function App() {
//   let [pic, setPic] = useState();
//   const tag = 'dog';
//   const perPage = 10;

//   // Construct the Flickr API URL with JSONP support.
//   const apiUrl = `https://www.flickr.com/services/api/flickr.photos.search.html?api_key=0b190752e08fdbf952b119ff76b64931&tags=dogs`;

//   // Define a callback function to handle the JSONP response.
//   window.handleFlickrResponse = (data) => {
//     console.log(data);
//     console.log("/////////////////////////////");
//     console.log(data.items);
//     let l = data.items['0'];
//     setPic(l.link);
//     // You can now access the photos with the "dog" tag from the response.
//   };

//   // Make the JSONP request.
//   jsonp(apiUrl, null, (error) => {
//     if (error) {
//       console.error('Error:', error);
//     }
//   });

//   return (
//     <div className="App">
//       <h1>SNAPSHOT</h1>
//       <input type="text" placeholder="search" />
//       <button>Search</button>
//       {/* <img src="https://www.flickr.com/photos/196388703@N04/53203567318/" /> */}
//     </div>
//   );
// }

// export default App;







// import React, { useState, useEffect } from 'react';
// import jsonp from 'jsonp';

// function App() {
//   const [photos, setPhotos] = useState([]);
//   const tag = 'puppies';

//   useEffect(() => {
//     // Construct the Flickr API URL with JSONP support.
//     const apiUrl = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${tag}&jsoncallback=handleFlickrResponse`;

//     // Define a callback function to handle the JSONP response.
//     window.handleFlickrResponse = (data) => {
//       setPhotos(data.items);
//       // This will set the 'photos' state with the array of photo items.
//     };

//     // Make the JSONP request.
//     jsonp(apiUrl, null, (error) => {
//       if (error) {
//         console.error('Error:', error);
//       }
//     });
//   }, [tag]);

//   return (
//     <div className="App">
//       <h1>SNAPSHOT</h1>
//       <input type="text" placeholder="search" />
//       <button>Search</button>
//       <div className="photos">
//         {photos.map((photo, index) => (
//           <img key={index} src={photo.media.m} alt={`Dog ${index + 1}`} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;