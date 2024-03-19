import React from "react";
import Tweets from "./Tweets";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

function Home() {
  const token = useSelector((state) => state.user.token);
  console.log("el token es " + token);
  if (!token) {
    console.log("te estoy rebotando");
    return <Navigate to="/login" replace />;
  }

  console.log("no te rebote , entraste a Home");
  const [tweetieContent, setTweetieContent] = useState("");

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
        //params :,
      });
      // no guardar como estado , guardarlo en la store
      console.log("Tweet enviado:", response.data);
    };
    postTweets();
  };
  return (
    <>
      <div className="col-6">
        <span>
          <Link to={"http://localhost:5174/registro"}>
            <button type="button">Registro Component</button>{" "}
          </Link>
        </span>
        <span>
          <Link to={"http://localhost:5174/login"}>
            <button type="button">Login Component</button>{" "}
          </Link>
        </span>
        <span>
          <Link to={"http://localhost:5174/profile"}>
            <button type="button">Perfil de usuario Component</button>{" "}
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
      </div>
    </>
  );
}

export default Home;
