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

export const Tag = (props) => {
  const template = (
    <div
      style={{
        background: props.bck ? props.bck : "#ffffff",
        fontSize: props.size ? props.size : "15px",
        color: props.color ? props.color : "#000000",
        padding: "5px 10px",
        display: "inline-block",
        fontFamily: "Righteous",
        ...props.add,
      }}
    >
      {props.children}
    </div>
  );

  if (props.link) {
    return <Link to={props.linkTo}>{template}</Link>;
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
