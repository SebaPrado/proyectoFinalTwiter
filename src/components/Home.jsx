import Tweets from "./Tweets";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Nvbar";
import News from "./News";

function Home() {
  const token = useSelector((state) => state.user.token);
  console.log("el token es " + token);
  if (token === "credenciales invalidas") {
    console.log("te estoy rebotando");
    return <Navigate to="/login" replace />;
  }

  console.log("no te rebote , entraste a Home");
  const [tweetieContent, setTweetieContent] = useState("");

  console.log("token: " + token);
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
      console.log({ "Tweet enviado": response.data });
    };
    postTweet();
  };
  return (
    <div className="row">
      <Navbar />
      <div className="col-7 m-0 p-2">
        <Link to="/registro">Registro Component</Link>

        <Link to="/login">Login Component</Link>

        <Link to="/profile">Perfil de usuario Component</Link>

        <h2>Home</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="newTweet">Whats happening</label>
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
      <News />
    </div>
  );
}

export default Home;
