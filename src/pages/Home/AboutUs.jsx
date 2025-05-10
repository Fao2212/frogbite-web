import SnapSection from "../../Components/SnapSection";
import logo from "/src/assets/logo.png";

const AboutUs = () => {
  return (
    <SnapSection id="about-section" classProps="bg-green-300 ">
      <div class=" flex justify-center gap-40 p-30">
        <div id="about-image-container" class="w-1/3 h-1/2">
          <img src={logo} class="w-full h-full"></img>
        </div>
        <div id="about-text-container" class="w-1/2">
          <h1 class="text-primary-frog"> About Us</h1>
          <p>
            Frogbyte Studio was founded by 3 friends with an intense love for
            games. We had passion, experience and creativity with nowhere to
            channel it, so we made our means. Since then it has grown with the
            love and support of the Costa Rican Game Industry and other gamers
            who have the same passion as us and want to see our country grow and
            showcase the talent that we know we have.
          </p>
        </div>
      </div>
    </SnapSection>
  );
};

export default AboutUs;
