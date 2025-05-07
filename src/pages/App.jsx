import NavBar from "../Components/NavBar";
import Hero from "./Home/Hero";
import AboutUs from "./Home/AboutUs";
import Partners from "./Home/Partners";

function App() {
  return (
    <div class="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth no-scrollbar">
      <NavBar />
      <Hero />
      <AboutUs />
      <Partners />
    </div>
  );
}
export default App;
