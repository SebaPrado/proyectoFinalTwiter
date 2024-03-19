import React, { useState } from "react";
import Navbar from "./Nvbar";
import News from "./News";
import { useSelector } from "react-redux";
import Tweets from "./Tweets";

function Profile() {
  // const token = useSelector((state) => state.user.token);

  // if (token === "credenciales invalidas") {
  //   return <Navigate to="/login" replace />;
  // }

  // const [tweetieContent, setTweetieContent] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const postTweet = async () => {
  //     const response = await axios({
  //       method: `POST`,
  //       url: `http://localhost:3004/tweets`,
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //       data: { text: tweetieContent },
  //     });
  //   };
  //   postTweet();
  // };

  return (
    <div className="row ">
      <Navbar />
      <div className="col-7 m-0 p-0">
        <div className="border-tw">
          <div className="user-back-img">
            <div className="rounded-circle user-img"></div>
          </div>
          <div className="mt-5">
            <div className="mx-4">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column text-white">
                  <h4 className="mb-0">Leia Organa</h4>
                  <p className="text-g ">@princesaleia</p>
                </div>
                <div className="d-flex text-white">
                  <p className="mx-3">
                    19 <span className="text-g">Following</span>
                  </p>
                  <p>
                    123 <span className="text-g">Followers</span>
                  </p>
                </div>
              </div>
              <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                corporis sequi vel magnam qui a officiis quis dignissimos
                delectus quos.
              </p>
            </div>
          </div>
        </div>
        <Tweets />
      </div>
      <News />
    </div>
  );
}

export default Profile;
