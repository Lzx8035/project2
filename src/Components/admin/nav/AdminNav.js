import React from "react";
import { Link } from "react-router-dom";

import { ListItem } from "@mui/material";

import { handleSignOut } from "../../Utils/tools";

import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  }
  return ComponentWithRouterProp;
}

const AdminNav = (props) => {
  const links = [
    {
      title: "Matches",
      linkTo: "/admin_matches",
    },
    {
      title: "Players",
      linkTo: "/admin_players",
    },
  ];

  const renderItems = () =>
    links.map((link) => (
      <Link to={link.linkTo} key={link.title}>
        <ListItem className="admin_nav_link">{link.title}</ListItem>
      </Link>
    ));

  return (
    <div>
      {renderItems()}
      <ListItem button className="admin_nav_link" onClick={handleSignOut}>
        Log out
      </ListItem>
    </div>
  );
};

export default withRouter(AdminNav);
