import React, { Component } from "react";
import PostItem from "./PostItem";
import "../Assets/Posts.css";

export default class Posts extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Rodrigo Alves",
          avatar: "https://randomuser.me/api/portraits/lego/0.jpg"
        },
        date: "04 Jun 2019",
        content:
          "No meu xinélo da humildade eu gostaria muito de ver o Neymar e o Ganso. Por que eu acho que.... 11 entre 10 brasileiros gostariam. Você veja, eu já vi, parei de ver. Voltei a ver, e acho que o Neymar e o Ganso têm essa capacidade de fazer a gente olhar.",
        comments: [
          {
            id: 1,
            author: {
              name: "Shiro Nakamura",
              avatar: "https://randomuser.me/api/portraits/lego/8.jpg"
            },
            content:
              "Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="container">
        <ul>
          {this.state.posts.map(post => (
            <PostItem key={post.id} data={post} />
          ))}
        </ul>
      </div>
    );
  }
}
