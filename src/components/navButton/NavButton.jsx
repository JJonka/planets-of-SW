import { Link } from "react-router-dom";

export const NavButton = ({ link, linkTitle }) => {
  return (
    <div>
      <Link to={link}>
        <h6>{linkTitle}</h6>
      </Link>
    </div>
  );
};
