import React from "react";
import Comments from "./Comments";
import "../Assets/Posts.css";

export default function PostItem({ data }) {
  return (
    <div className="card">
      <div>
        <img className="card_img" src={data.author.avatar} alt="profile" />
        <div>
          <h3>{data.author.name}</h3>
          <p>{data.date}</p>
        </div>
      </div>
      <p className="card_text">{data.content}</p>
      <span />
      {data.comments.map(comment => (
        <Comments key={comment.id} data={comment} />
      ))}
    </div>
  );
}
