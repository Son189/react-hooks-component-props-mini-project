import React from "react";
import blogData from "../data/blog";
import ArticleList from './ArticleList';

function Article(ArticleList){
    return(
        <article>
            
            <h3>{ArticleList.title}</h3>
            <small>{ArticleList.date}</small>
            <p>{ArticleList.preview}</p>
      </article>
    )
}
export default Article