import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { createTweet } from "../redux/tweetsSlice";

function UserTweets() {
  const dispatch = useDispatch();
  const userId = "65f9d394963fc0fdae755f5d";

  const [tweetList, setTweetList] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        method: `GET`,
        url: `http://localhost:3004/tweets`,
      });
      console.log(response.data);
      const userTweets = response.data.filter(
        (tweet) => tweet.user._id === userId
      );

      console.log("userTweets", userTweets);
      setTweetList(userTweets);
      dispatch(createTweet(userTweets));
    };

    getTweets();
  }, [userId, dispatch]);

  return (
    <>
      <ul>
        {tweetList.map(function (tweet) {
          return (
            <li className="border-tw" key={nanoid()}>
              <div className="contenedorTweets">
                <div className="row">
                  <div className="col-2">Img</div>
                  <div className="col-10">
                    <h6>{tweet.user?.nombre}</h6>
                    <p>{tweet.texto}</p>
                    <p>Likes : {tweet.likes.length}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UserTweets;
