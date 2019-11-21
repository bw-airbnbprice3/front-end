import React from "react";
import {Link} from "react-router-dom";

const ConfirmUpdate = () => {
  return <h3>Your post has been updated. View the updated <Link to={"/listings"}>listings</Link> here.</h3>
};

export default ConfirmUpdate;