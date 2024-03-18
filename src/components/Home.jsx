import React from "react";
import Tweets from "./Tweets";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Home() {
  const [tweetieContent, setTweetieContent] = useState("");
  const token = useSelector((state) => state.user.token);
  console.log("token: " + token);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const postTweets = async () => {
      const response = await axios({
        method: `POST`,
        url: `http://localhost:3004/tweets`,
        headers: {
          Authorization: "Bearer " + token,
        },
        data: { text: tweetieContent },
      });

      // no guardar como estado , guardarlo en la store
      console.log("Tweet enviado:", response.data);
    };
    postTweets();
  };
  return (
    <>
    <span >
        <Link to={"http://localhost:5174/registro"}>
          <button type="button">Registro Component</button>{" "}
        </Link>
      </span>
      <span>
        <Link to={"http://localhost:5174/login"}>
          <button type="button">Registro Component</button>{" "}
        </Link>
      </span ><span>
        <Link to={"http://localhost:5174/profile"}>
          <button type="button">Registro Component</button>{" "}
        </Link>
      </span>
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
