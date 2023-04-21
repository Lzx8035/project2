import React from "react";

import { Link } from "react-router-dom";
import MCLOGO from "../../Resources/images/logos/manchester_city_logo.png";

import { toast } from "react-toastify";

import firebase from "../../firebase";
import { getAuth, signOut } from "firebase/auth";

export const CityLogo = (props) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${MCLOGO}) no-repeat`,
      }}
    ></div>
  );

  if (props.link) {
    return (
      <Link className="link_logo" to={props.linkTo}>
        {template}
      </Link>
    );
  } else {
    return template;
  }
};

export const showToastError = (msg) => {
  toast.error(msg, {
    position: toast.POSITION.TOP_LEFT,
  });
};

export const showToastSuccess = (msg) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_LEFT,
  });
};

const auth = getAuth(firebase);

export const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      showToastSuccess("Goodbye!");
    })
    .catch((error) => {
      showToastError(error);
    });
};
