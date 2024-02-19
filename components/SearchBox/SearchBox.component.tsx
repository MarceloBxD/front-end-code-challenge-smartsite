"use client";

import React, { useState } from "react";
import Image from "next/image";
import ClockIcon from "../../assets/icons/icon-hour.png";
import { Button } from "../Button/Button.component";

type ButtonOptionsProps = {
  title: string;
  primary: boolean;
  type: "button" | "submit" | "reset";
};

export const SearchBox = () => {
  const buttonOptions: ButtonOptionsProps[] = [
    {
      title: "Encontrar Unidade",
      primary: true,
      type: "submit",
    },
    {
      title: "Limpar",
      primary: false,
      type: "reset",
    },
  ];

  const [results, setResults] = useState(0);
  const [period, setPeriod] = useState([
    {
      name: "Manhã",
      hours: "06:00 - 12:00",
      checked: false,
    },
    {
      name: "Tarde",
      hours: "12:00 - 18:00",
      checked: false,
    },
    {
      name: "Noite",
      hours: "18:01 - 23:00",
      checked: false,
    },
  ]);

  return (
    <div className="p-5 border-2 border-light-grey flex flex-col">
      <div className="w-full items-start flex m-4">
        <Image
          className="w-6 h-6 mr-2"
          src={ClockIcon}
          alt="Ícone de relógio"
        />
        <p>Horário</p>
      </div>
      <div>
        <h2 className="text-light-grey text-lg">Qual período quer treinar?</h2>
        {period.map((item, index) => (
          <div key={index} className="flex justify-between border-b-2 my-2">
            <div className="border-light-grey mt-2">
              <input
                type="radio"
                className="mr-2"
                id={item.name}
                name={item.name}
                checked={item.checked}
                onChange={() => {
                  const newPeriod = period.map((periodItem, periodIndex) => {
                    if (index === periodIndex) {
                      return {
                        ...periodItem,
                        checked: !periodItem.checked,
                      };
                    }
                    return periodItem;
                  });
                  setPeriod(newPeriod);
                }}
              />
              <label htmlFor={item.name} className="text-light-grey">
                {item.name}
              </label>
            </div>
            <div>
              <p className="text-light-grey">{item.hours}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-4 justify-between">
        <div>
          <input
            className="mr-2"
            type="radio"
            title="Exibir unidades fechadas"
          />
          <label htmlFor="closed-units" className="text-light-grey">
            Exibir unidades fechadas
          </label>
        </div>
        <p>
          Resultado encontrados: <span className="font-bold">{results}</span>
        </p>
      </div>
      <div className="flex justify-center  my-4">
        {buttonOptions.map((button, index) => (
          <Button
            primary={button.primary}
            key={index}
            title={button.title}
            type={button.type}
          />
        ))}
      </div>
    </div>
  );
};
