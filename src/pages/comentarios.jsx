import React, { useState, useEffect } from "react";
import FeaturedPost from "../components/featured-post";
import PostComments from "../components/post-comments";


export default function Comentarios() {

  const [comments, setComments] = useState();




  async function getComments() {
    const response = fetch("https://jsonplaceholder.typicode.com/posts/[ID]/comments")
      .then((response) => {
        if (response.status === 200) {
          return response.json()

        }
      })
      .then((data) => {
        setComments(data)
      });

  }
  useEffect(() => {
    getComments();

  }, [])

  return (
    <div>
      {
        comments && comments.length > 0 && <FeaturedPost comments={comments[0]} />
      }

      {comments ? (
        <div>
          <div className="mt-4 d-flex align-items-center">
            <div>
              {comments.userId}
            </div>

            <div>
              {comments.id}

              <p className='lead'>
                {comments.title}
              </p>
              <p className='lead'>
                {comments.body}
              </p>
            </div>

          </div>
        </div>

      ) : null}


      <PostComments comments={comments} />
    </div>
  );
}