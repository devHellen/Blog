import React from "react";
import Comments from "../../components/comments";



export default function PostComments({ Comments }){

    return (
        <div className="post-list-container">             
          {
            Comments && Comments.map((comments) => {
                return <Comments comments={comments} />;
            })
          } 
           
        </div>
    );
}