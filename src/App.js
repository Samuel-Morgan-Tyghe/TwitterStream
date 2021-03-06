import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [newTweets, setNewTweets] = useState([]);

 

  // This would be called to run twitterStream.js to rewrite new tweets to db.json
  // call the get to creat a temp list with this new tweets
  // add to list

  // function loadTweets() {
  //   console.log(`node src/twitterStream.js`);
  // ^^ normally this would be a simple call But i cant the solution right now 

  //   getNewTweets()
  // ^^ call getNewTweets to add the latest tweets in db.json 
  // }

  // this would detect scroll position and load a new batch to the page once reached a certain length
  // function detectScrollLocation(){

  //   if ( scrollLocation > '80%'){
  //   loadTweets()
  //   }
  // }


  // if newTweets is x size when loading new tweets delete the same amount ( remove from beggining)

  useEffect(() => {
    const getNewTweets = async () => {
      try {
        const resp = await axios
          .get("http://localhost:3000/tweets", {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setNewTweets(...newTweets,response.data.tweetList);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    getNewTweets();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
    
        
          {newTweets.length > 0
            ? newTweets.map((tweet , id) => <p key={id}>{tweet}</p>)
            : "nought"}
        

      </header>
    </div>
  );
}

export default App;
