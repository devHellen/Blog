import React from "react";
import "./styles.css";
import {Link} from "react-router-dom";



export default function Post({ post }) {

    return (
    <div className="post-container">
    
        <div>
        <p className="post-date">{post.id}</p>
        <Link to="#">
        <p className="post-title">{post.title}</p>
        </Link>
        <p className="post-description">{post.body}         
        </p>
        <p className="post-description">{post.name}         
        </p>
        <p className="post-description">{post.body}         
        </p>
  
        </div>

    </div>
    );
}