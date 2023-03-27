import React, { useState, useEffect } from "react";
import FeaturedPost from "../components/featured-post";

import Userlist from "../components/user-list";




export default function Usuarios() {

  const [users, setUsers] = useState();




  async function getUsers() {
    const response = fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.status === 200) {
          return response.json()

        }
      })
      .then((data) => {
        setUsers(data)
      });

  }
  useEffect(() => {
    getUsers();

  }, [])

  return (
    <div>
        
      {
        users && users.length > 0 && <FeaturedPost users={users[0]} />
      }

      {users ? (
        <div>
          <div className="mt-4 d-flex align-items-center">
            <div>
              {users.id}
            </div>

            <div>
              {users.name}

              <p className='lead'>
                {users.username}
              </p>
              <p className='lead'>
                {users.email}
              </p>
            </div>

          </div>
        </div>

      ) : null}


      <Userlist users={users} />
    </div>
  );
}