import ScrollIcon from "../../Components/ScrollIcon";
import SnapSection from "../../Components/SnapSection";

const Hero = () => {
  return (
    <SnapSection id="hero" classProps="relative ">
      <h1 class="absolute right-20 leading-30 top-1/4">
        MAKING THE <br /> GAMES WE <br /> WANT TO PLAY
      </h1>
      <video muted playsInline autoPlay loop class="w-full h-full object-cover">
        <source src="src\assets\video.mp4" type="video/mp4" />
      </video>
      <ScrollIcon />
    </SnapSection>
  );
};
export default Hero;
