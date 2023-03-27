import React from "react";
// import "./styles.css";
import {Link} from "react-router-dom";



export default function Comments({ comments }) {

    return (
    <div className="post-container">
    
        <div>
        <p className="post-date">{comments.postId}</p>
        <Link to="#">
        <p className="post-title">{comments.id}</p>
        </Link>
        <p className="post-description">{comments.name}         
        </p>
        <p className="post-description">{comments.email}         
        </p>
        <p className="post-description">{comments.body}         
        </p>
  
        </div>

    </div>
    );
}