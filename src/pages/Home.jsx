import NavBar from "../Components/NavBar"
import NavButton from "../Components/NavButton"

const Home = () => {
    return (
        <div class='overflow-hidden w-full h-screen'>
            <NavBar />
            <video muted playsInline autoPlay loop class='w-full h-full object-cover' >
                <source src="src\assets\video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
export default Home