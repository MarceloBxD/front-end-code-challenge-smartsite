export type MandatoryItemProps = {
  name: string;
  descriptions: {
    image: string;
    type: string;
  }[];
};

export const mandarotyItems: MandatoryItemProps[] = [
  {
    name: "Máscara",
    descriptions: [
      {
        image: "https://www.google.com",
        type: "Obrigatório",
      },
      {
        image: "https://www.google.com",
        type: "Recomendado",
      },
    ],
  },
  {
    name: "Toalha",
    descriptions: [
      {
        image: "https://www.google.com",
        type: "Obrigatório",
      },
      {
        image: "https://www.google.com",
        type: "Recomendado",
      },
    ],
  },
  {
    name: "Bebedouro",
    descriptions: [
      {
        image: "https://www.google.com",
        type: "Parcial",
      },
      {
        image: "https://www.google.com",
        type: "Proibido",
      },
    ],
  },
  {
    name: "Vestiários",
    descriptions: [
      {
        image: "https://www.google.com",
        type: "Liberal",
      },
      {
        image: "https://www.google.com",
        type: "Parcial",
      },
      {
        image: "https://www.google.com",
        type: "Fechado",
      },
    ],
  },
];
