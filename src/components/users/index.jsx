import React from "react";
// import "./styles.css";
import {Link} from "react-router-dom";



export default function Users ({ users }) {

    return (
    <div className="post-container">
      
        <div>
        <p className="post-date">{users.id}</p>
        <Link to="#">
        <p className="post-title">{users.title}</p>
        </Link>
        <p className="post-description">{users.body}         
        </p>
        <p className="post-description">{users.name}         
        </p>
        <p className="post-description">{users.username}         
        </p>
        <p className="post-description">{users.email}         
        </p>
        <p className="post-description">{users.address.street}         
        </p>
        <p className="post-description">{users.address.suite}         
        </p>
        <p className="post-description">{users.address.city}         
        </p>
        <p className="post-description">{users.address.zipcode}         
        </p>
        <p className="post-description">{users.address.geo.lat}         
        </p>
        <p className="post-description">{users.address.geo.lng}         
        </p>
        <p className="post-description">{users.phone}         
        </p>
        <p className="post-description">{users.website}         
        </p>
        <p className="post-description">{users.company.name}         
        </p>
        <p className="post-description">{users.company.catchPhrase}         
        </p>
        <p className="post-description">{users.company.bs}         
        </p>
        </div>

    </div>
    );
}