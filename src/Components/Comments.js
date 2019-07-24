import React from "react";
import "../Assets/Comments.css";

const Comments = ({ data }) => (
  <div className="comment">
    <img src={data.author.avatar} alt="profile" />
    <p>
      <strong>{data.author.name}</strong> {data.content}{" "}
    </p>
  </div>
);

export default Comments;
