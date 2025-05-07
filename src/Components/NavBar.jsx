import NavButton from "./NavButton"

const NavBar = () => {
    //transparent background color
    return <div class='fixed flex justify-between items-center bg-transparent top-0 left-0 w-full z-50'>
    <img id="navbarLogo" src='src\assets\logo.png ' class='w-1/6' />
        <ul id="navButtonList" class='flex flex-row gap-3 bg-black '>
            <li>
                <NavButton id='homeNavButton' text={"Home"}></NavButton>
            </li>
            <li>
                <NavButton id='gamesNavButton' text={"Our Games"}></NavButton>
            </li>
            <li>
                <NavButton id='servicesNavButton' text={"Services"}></NavButton>
            </li>
            <li>
                <NavButton text={"Carreers"}></NavButton>
            </li>
            <li>
                <NavButton text={"Contact Us"}></NavButton>
            </li>
        </ul>
    </div>
}

export default NavBar