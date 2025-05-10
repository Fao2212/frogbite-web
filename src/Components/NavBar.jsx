import NavButton from "./NavButton";
import logo from "/src/assets/logo.png";

const NavBar = () => {
  return (
    <div class="fixed flex justify-between bg-transparent top-0 left-0 w-full z-50">
      <div class="w-1/6 rounded-full bg-black flex items-center justify-center p-10">
        <img id="navbarLogo" src={logo} />
      </div>
      <ul
        id="navButtonList"
        class="flex flex-row gap-3 bg-black items-center rounded-full px-20 -right-1/2"
      >
        <li>
          <NavButton
            id="homeNavButton"
            text={"Home"}
            url={"/frogbite-web/"}
          ></NavButton>
        </li>
        <li>
          <NavButton
            id="gamesNavButton"
            text={"Our Games"}
            url={"/frogbite-web/games"}
          ></NavButton>
        </li>
        <li>
          <NavButton
            id="servicesNavButton"
            text={"Services"}
            url={"/frogbite-web/services"}
          ></NavButton>
        </li>
        <li>
          <NavButton
            id="carreersNavButton"
            text={"Careers"}
            url={"/frogbite-web/careers"}
          ></NavButton>
        </li>
        <li>
          <NavButton
            id="contactNavButton"
            text={"Contact Us"}
            url={"/frogbite-web/contact"}
          ></NavButton>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
