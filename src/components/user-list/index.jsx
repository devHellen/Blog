import React from "react";
import Users from "../../components/users";
// import "./styles.css";


export default function Userlist({ users }){

    return (
        <div className="post-list-container">             
          {
            users && users.map((users) => {
                return <Users users={users} />;
            })
          } 
           
        </div>
    );
}