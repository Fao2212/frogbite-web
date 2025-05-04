import NavButton from "./NavButton"

const NavBar = () => {
    return <>
    <img src='src\assets\logo.png' class='absolute w-1/6' />
            <div class='absolute right-1/30 h-full content-center text-white text-9xl'>
                <ul class='grid gap-10'>
                    <li>
                        <NavButton text={"Home"}></NavButton>
                    </li>
                    <li>
                        <NavButton text={"Our Games"}></NavButton>
                    </li>
                    <li>
                        <NavButton text={"Services"}></NavButton>
                    </li>
                    <li>
                        <NavButton text={"Carreers"}></NavButton>
                    </li>
                    <li>
                        <NavButton text={"Contact Us"}></NavButton>
                    </li>
                </ul>
            </div>
    </>
}

export default NavBar