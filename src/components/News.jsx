import React from "react";

function News() {
  return (
    <div className="news col-2 p-0 m-3">
      <h4 className="mx-3 mt-3 p-2 title">What's happening</h4>
      <div className="mt-3 mb-2 mx-4">
        <p className=" mb-0 text">Programming - Trending</p>
        <p className=" mb-0 title">#MongoVsSequelize</p>
        <p className=" mb-0 text">97.5k Tweets</p>
      </div>
      <div className="mb-2 mx-4">
        <p className=" mb-0 text">Entretaiment - Trending</p>
        <p className=" mb-0 title">#StarWars</p>
        <p className=" mb-0 text">92.5k Tweets</p>
      </div>
      <div className="mb-2 mx-4">
        <p className=" mb-0 text">News - Trending</p>
        <p className=" mb-0 title">#LifeInMars</p>
        <p className=" mb-0 text">87.5k Tweets</p>
      </div>
    </div>
  );
}

export default News;
