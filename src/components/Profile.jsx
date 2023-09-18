import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-4 d-flex flex-column profile-card gap-2">
      <Link to={`/photo/${props.userId}`}>
        <img src={props.userImg} alt="profile-thumbnail" />
      </Link>
      <Link className="user-title" to={`/photo/${props.userId}`}>
        {props.title}
      </Link>
    </div>
  );
};

export default Profile;
