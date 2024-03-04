import { Link } from "react-router-dom";

const NavButton = ({ link, linkTitle, data }) => {
  const currentIndex = data.indexOf("Tatooine");
  console.log(document.URL);
  return (
    <div>
      <Link to={link}>
        <h6>{linkTitle}</h6>
      </Link>
    </div>
  );
};

export default NavButton;