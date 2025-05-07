import SnapSection from "../../Components/SnapSection";
import { partners } from "../../data/partners.json";

const Partners = () => {
  console.log(partners);
  return (
    <SnapSection classProps="bg-green-950 w-screen h-screen pt-30 px-10">
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
    </SnapSection>
  );
};

export default Partners;
