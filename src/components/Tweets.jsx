import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { createTweet } from "../redux/tweetsSlice";

function Tweets() {
  const dispatch = useDispatch();

  const [tweetList, setTweetList] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        method: `GET`,
        url: `http://localhost:3004/tweets`,
      });

      setTweetList(response.data); // no guardar como estado , guardarlo en la store
    };
    getTweets();
  }, []);

  dispatch(createTweet(tweetList));

  return (
    <>
      <ul>
        {tweetList.map(function (tweet) {
          return (
            <li className="border-tw  " key={nanoid()}>
              <div className=" contenedorTweets">
                <div className="row">
                  <div className="col-2">Img</div>
                  <div className="col-10">
                    <h6>{tweet.user?.firstname}</h6>
                    <p>{tweet.texto}</p>
                    <p>Likes : {tweet.likes.length}</p>
                  </div>
                </div>
              </div>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Tweets;
