import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [newTweets, setNewTweets] = useState([]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [outerHeight, setOuterHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    const height = document.documentElement.scrollHeight;
    setOuterHeight(height);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (scrollPosition > outerHeight * 0.8) {
    streamTweets();
    triggerGetNewTweets();
  }

  // if newTweets is x size when loading new tweets delete the same amount ( remove from beggining)

  useEffect(() => {
    streamTweets();
    triggerGetNewTweets();
  }, []);

  function streamTweets() {
    // still requires compiling through console commands

    const Twitter = require("./Librarys/build/twitter.js");
    const axios = require("axios").default;

    const main = async () => {
      // async function main() {

      let tweetList = [];

      const client = new Twitter({
        consumer_key: "",
        consumer_key: "",
        consumer_secret: "",
        access_token_key: "",
        access_token_secret: "",
      });

      // Uncaught (in promise) TypeError: url_1.URL is not a constructor

      const stream = client.stream("tweets/sample/stream");

      setTimeout(() => {
        stream.close();
        addListToDataBase();
      }, 3000);

      for await (const { data } of stream) {
        // console.log(`${data.id}: ${data.text.replace(/\s/g, ' ')}`);
        //impliment something like above to keep strings - strings
        tweetList.push(data.text);
      }

      function addListToDataBase() {
        axios
          .post("http://localhost:3000/tweets", { tweetList })
          .then(function (response) {
            // console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    };

    main();
  }

  function triggerGetNewTweets() {
    const getNewTweets = async () => {
      try {
        const resp = await axios
          .get("http://localhost:3000/tweets", {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setNewTweets(...newTweets, response.data.tweetList);
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
  }

  return (
    <div className="App">
      <header className="App-header">
        {newTweets.length > 0
          ? newTweets.map((tweet, id) => <p key={id}>{tweet}</p>)
          : "nought"}
      </header>
    </div>
  );
}

export default App;
