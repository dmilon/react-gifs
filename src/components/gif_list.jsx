import React from "react";
import Gif from "./gif";

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifIds.map((id) => {
        return <Gif id={id} key={id} selectGif={props.selectGif} />;
      })}
    </div>
  );
};

export default GifList;
