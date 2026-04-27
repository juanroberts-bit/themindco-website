// Priority logos (ordered)
import pepsico from "@/assets/clients/pepsico.png";
import johnsonJohnson from "@/assets/clients/johnson_johnson.png";
import cepi from "@/assets/clients/cepi.png";
import boehringerIngelheim from "@/assets/clients/boehringer_ingelheim.png";
import stevanatoGroup from "@/assets/clients/stevanato_group.png";
import sanofi from "@/assets/clients/sanofi.png";
import unilever from "@/assets/clients/unilever.png";
import astrazeneca from "@/assets/clients/astrazeneca.png";

// Remaining logos (randomized)
import abbvie from "@/assets/clients/abbvie.png";
import adecco from "@/assets/clients/adecco.png";
import advent from "@/assets/clients/advent.png";
import amneal from "@/assets/clients/amneal.png";
import aquacapital from "@/assets/clients/aquacapital.png";
import axa from "@/assets/clients/Axa.png";
import ase from "@/assets/clients/ASE.png"; // processed from Logo_ase.svg
import bago from "@/assets/clients/bago.png";
import bauschLomb from "@/assets/clients/bausch_lomb.png";
import baxter from "@/assets/clients/baxter.png";
import bayer from "@/assets/clients/bayer.png";
import bd from "@/assets/clients/bd.png";
import cornucopian from "@/assets/clients/Cornucopian.png";
import femsa from "@/assets/clients/femsa.svg";
import gbt from "@/assets/clients/gbt.png";
import genfar from "@/assets/clients/genfar.png";
import grunenthal from "@/assets/clients/grunenthal.png";
import grupoProfarmaco from "@/assets/clients/grupo_profarmaco.png";
import leti from "@/assets/clients/leti.png";
import moderna from "@/assets/clients/moderna.png";
import newsan from "@/assets/clients/newsan.png";
import omron from "@/assets/clients/omron.png";
import pfizer from "@/assets/clients/pfizer.png";
import reiner from "@/assets/clients/reiner.png";
import santhera from "@/assets/clients/santhera.png";

import valea from "@/assets/clients/valea.png";
import zentiva from "@/assets/clients/zentiva.png";

interface ClientLogo {
  name: string;
  src: string;
}

const priorityLogos: ClientLogo[] = [
  { name: "PepsiCo", src: pepsico },
  { name: "Johnson & Johnson", src: johnsonJohnson },
  { name: "CEPI", src: cepi },
  { name: "Boehringer Ingelheim", src: boehringerIngelheim },
  { name: "Stevanato Group", src: stevanatoGroup },
  { name: "Sanofi", src: sanofi },
  { name: "Unilever", src: unilever },
  { name: "AstraZeneca", src: astrazeneca },
];

const remainingLogos: ClientLogo[] = [
  { name: "AbbVie", src: abbvie },
  { name: "Adecco", src: adecco },
  { name: "Advent", src: advent },
  { name: "Amneal", src: amneal },
  { name: "Aqua Capital", src: aquacapital },
  { name: "AXA", src: axa },
  { name: "Bagó", src: bago },
  { name: "Bausch + Lomb", src: bauschLomb },
  { name: "Baxter", src: baxter },
  { name: "Bayer", src: bayer },
  { name: "BD", src: bd },
  { name: "ASE", src: ase },
  { name: "Cornucopian", src: cornucopian },
  { name: "FEMSA", src: femsa },
  { name: "GBT", src: gbt },
  { name: "Genfar", src: genfar },
  { name: "Grünenthal", src: grunenthal },
  { name: "Grupo ProFármaco", src: grupoProfarmaco },
  { name: "Leti", src: leti },
  { name: "Moderna", src: moderna },
  { name: "Newsan", src: newsan },
  { name: "Omron", src: omron },
  { name: "Pfizer", src: pfizer },
  { name: "Reiner Group", src: reiner },
  { name: "Santhera", src: santhera },

  { name: "Valea", src: valea },
  { name: "Zentiva", src: zentiva },
];

const allLogos = [...priorityLogos, ...remainingLogos];

export default function ClientLogoWall() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground mb-12">
          Some of the clients who trust us
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 items-center">
          {allLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center h-16 md:h-20 px-2 group"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full max-w-full object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
