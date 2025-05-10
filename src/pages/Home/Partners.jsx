import SnapSection from "../../Components/SnapSection";
import { partners } from "../../data/partners.json";

const Partners = () => {
  return (
    <SnapSection classProps="bg-green-950 w-screen h-screen px-10 flex items-center justify-center">
      <div class="p-30">
        <h1 class="underline decoration-primary-frog">our partners</h1>
        <div class="grid grid-cols-4 pb-20 px-20">
          {partners.map((partner) => (
            <img
              src={partner.image}
              class="h-full w-full p-10"
              alt={partner.name}
            />
          ))}
        </div>
      </div>
    </SnapSection>
  );
};

export default Partners;
