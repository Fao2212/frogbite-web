import { Link } from "react-router-dom";

const NavButton = ({ id, text, url }) => {
  return (
    <button
      id={id}
      class="font-bebas hover:text-white text-5xl text-primary-frog"
    >
      <Link to={url}>{text}</Link>
    </button>
  );
};

export default NavButton;
