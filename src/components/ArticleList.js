import React from "react";
import blogData from "../data/blog";
import Article from "./Article";
function ArticleList(){
    return(
        <main>
          < Article  key={Article.title} date={Article.date} preview={Article.preview}/>
        </main>
    )
}