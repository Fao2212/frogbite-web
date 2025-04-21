const Home = () => {
    return (
        <div >
            <div class="static flex">
                <nav class="absolute flex place-content-between ">
                    <div>Logo Frogbyte</div>
                </nav>
                <div class='absolute right-0 h-full content-center text-white text-4xl'>
                    <ul class='gap-y-10'>
                        <li className="navbar__link">Home</li>
                        <li className="navbar__link">Our Games</li>
                        <li className="navbar__link">Services</li>
                        <li className="navbar__link">Carreers</li>
                        <li className="navbar__link">Contact Us</li>
                    </ul>
                </div>
                <img class=' w-screen h-screen' src="src\assets\5815630-3840x2160-desktop-hd-4k-wallpaper-image.jpg" />
            </div>
        </div >


    )
}
export default Home