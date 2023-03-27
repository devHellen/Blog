import React from "react";
import "./styles.css";
import {Link} from "react-router-dom";
import Author from "../author";



export default function FeaturedPost({ post }) {

    return (
    <div className="featured-post-container">
        <div>
            <p className="featured-post-imagem">{post ?.userId} </p>
        </div>

        <div>
        <p className="featured-post-date">{post ?.id}</p>
        <Link>
        <h2 className="featured-post-title">{post ?.title}</h2>
        </Link>
        <p className="featured-post-description">{post ?.body}
           
        </p>
        <p className="featured-post-description">{post ?.email}
           
        </p>

        <Author />
        </div>

    </div>
    );
}