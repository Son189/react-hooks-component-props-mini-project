import React from "react";
import blogData from "../data/blog";
function About(image,about){
    return(
<aside>
<img src={blogData.image} alt='blog logo'></img>
<p>{blogData.about}</p>
</aside>
)}
export default About