const NavButton = ({ id, text }) => {
  return (
    <button
      id={id}
      class="font-bebas hover:text-white text-5xl text-primary-frog"
    >
      {text}
    </button>
  );
};

export default NavButton;
