import Tweets from "./Tweets";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Navbar from "./Nvbar";
import News from "./News";
import { addTweets } from "../redux/tweetsSlice";

function Home() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  console.log("el token es " + token);
  if (token === "credenciales invalidas") {
    //|| token===null
    alert("credenciales invalidas ");
    return <Navigate to="/login" replace />;
  }

  const [tweetieContent, setTweetieContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const postTweet = async () => {
      const response = await axios({
        method: `POST`,
        url: `http://localhost:3004/tweets`,
        headers: {
          Authorization: "Bearer " + token,
        },
        data: { text: tweetieContent },
      });
      dispatch(addTweets([response.data]));

      setTweetieContent("");
    };
    postTweet();
  };
  return (
    <div className="row ">
      <Navbar />
      <div className="col-7 m-0 p-0">
        {/* <Link to="/registro">Registro Component</Link>

        <Link to="/login">Login Component</Link>

        <Link to="/profile">Perfil de usuario Component</Link> */}
        <div className="border-tw p-3 text-white">
          <h2>Home</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="newTweet">IMG</label>
            <input
              className="mx-2 search"
              placeholder="What's happening?"
              type="text"
              id="newTweet"
              name="newTweet"
              value={tweetieContent}
              onChange={(e) => setTweetieContent(e.target.value)} ///cambio
            />
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary">Tweet</button>
            </div>
          </form>
        </div>
        <Tweets />
      </div>
      <News />
    </div>
  );
}

export default Home;
