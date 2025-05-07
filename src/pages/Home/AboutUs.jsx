import SnapSection from "../../Components/SnapSection";

const AboutUs = () => {
  return (
    <SnapSection
      id="about-section"
      classProps="bg-green-300 flex items-center justify-center gap-40 "
    >
      <div class="relative w-1/3 h-1/2">
        <img src="src\assets\logo.png" class="w-full h-full"></img>
      </div>
      <div class="w-1/2">
        <h1 class="text-primary-frog"> About Us</h1>
        <p>
          Frogbyte Studio was founded by 3 friends with an intense love for
          games. We had passion, experience and creativity with nowhere to
          channel it, so we made our means. Since then it has grown with the
          love and support of the Costa Rican Game Industry and other gamers who
          have the same passion as us and want to see our country grow and
          showcase the talent that we know we have.
        </p>
      </div>
    </SnapSection>
  );
};

export default AboutUs;
