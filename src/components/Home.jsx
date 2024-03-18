import React from "react";
import Tweets from "./Tweets";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Home() {
  const [tweetieContent, setTweetieContent] = useState("");
  const token = useSelector((state) => state.user.token);
  console.log("token: " + token);

  // const handleTweetieContent = (e) => {
  //   setTweetieContent(e);
  //   console.log(tweetieContent);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postTweets = async () => {
      const response = await axios({
        method: `POST`,
        url: `http://localhost:3004/tweets`,
        headers: {
          Authorization: "Bearer " + token,
        },
        content: setTweetieContent(tweetieContent),
      });

      // no guardar como estado , guardarlo en la store
      console.log("Tweet enviado:", response.data);
    };
    postTweets();
  };
  return (
    <>
      <h2>Home</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="newTweet"> Whats happening...</label>
        <input
          placeholder="hola"
          type="text"
          id="newTweet"
          name="newTweet"
          value={tweetieContent}
          onChange={(e) => setTweetieContent(e.target.value)} ///cambio
        />
        <button>Crear Tweet</button>
      </form>
      <Tweets />
    </>
  );
}

export default Home;
