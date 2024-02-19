import { StaticImageData } from "next/image";
import recommendedMask from "../assets/images/recommended-mask.png";
import requiredMask from "../assets/images/required-mask.png";
import recommendedTowel from "../assets/images/recommended-towel.png";
import requiredTowel from "../assets/images/required-towel.png";
import forbiddenFountain from "../assets/images/forbidden-fountain.png";
import partialFountain from "../assets/images/partial-fountain.png";
import forbiddenLockerRoom from "../assets/images/forbidden-lockerroom.png";
import partialLockerRoom from "../assets/images/partial-lockerroom.png";
import requiredLockerRoom from "../assets/images/required-lockerroom.png";

export type MandatoryItemProps = {
  name: string;
  descriptions: {
    image: StaticImageData | string;
    type: string;
  }[];
};

export const mandarotyItems: MandatoryItemProps[] = [
  {
    name: "Máscara",
    descriptions: [
      {
        image: requiredMask,
        type: "Obrigatório",
      },
      {
        image: recommendedMask,
        type: "Recomendado",
      },
    ],
  },
  {
    name: "Toalha",
    descriptions: [
      {
        image: requiredTowel,
        type: "Obrigatório",
      },
      {
        image: recommendedTowel,
        type: "Recomendado",
      },
    ],
  },
  {
    name: "Bebedouro",
    descriptions: [
      {
        image: partialFountain,
        type: "Parcial",
      },
      {
        image: forbiddenFountain,
        type: "Proibido",
      },
    ],
  },
  {
    name: "Vestiários",
    descriptions: [
      {
        image: requiredLockerRoom,
        type: "Liberal",
      },
      {
        image: partialLockerRoom,
        type: "Parcial",
      },
      {
        image: forbiddenLockerRoom,
        type: "Fechado",
      },
    ],
  },
];
