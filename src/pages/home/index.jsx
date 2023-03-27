import React, { useState, useEffect } from "react";
import FeaturedPost from "../../components/featured-post";
import PostList from "../../components/post-list";




export default function Home() {

  const [posts, setPosts] = useState();




  async function getPosts() {
    const response = fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status === 200) {
          return response.json()

        }
      })
      .then((data) => {
        setPosts(data)
      });

  }
  useEffect(() => {
    getPosts();

  }, [])

  return (
    <div>
      {
        posts && posts.length > 0 && <FeaturedPost posts={posts[0]} />
      }

      {posts ? (
        <div>
          <div className="mt-4 d-flex align-items-center">
            <div>
              {posts.userId}
            </div>

            <div>
              {posts.id}

              <p className='lead'>
                {posts.title}
              </p>
              <p className='lead'>
                {posts.body}
              </p>
            </div>

          </div>
        </div>

      ) : null}


      <PostList posts={posts} />
    </div>
  );
}