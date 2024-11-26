import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = ({ linkName, name }) => {
  // let { linkName, name } = props;
  return (
    <li className="nav-item">
      <Link className="nav-link js-scroll-trigger" to={linkName}>
        {name}
      </Link>
    </li>
  );
};

export default HeaderLink;
