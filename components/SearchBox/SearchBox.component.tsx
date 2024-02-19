import React, { useState } from "react";
import Image from "next/image";
import ClockIcon from "../../assets/icons/icon-hour.png";

export const SearchBox = () => {
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
    <div className="border border-light-grey flex flex-col shadow-sm">
      <div className="w-full items-start">
        <Image className="w-6 h-6" src={ClockIcon} alt="Ícone de relógio" />
        <p>Horário</p>
      </div>
      <div>
        <h2 className="text-light-grey text-lg">Qual período quer treinar?</h2>
        {period.map((item, index) => (
          <div key={index} className="flex justify-between">
            <div className="border border-b-2 border-light-grey mt-2">
              <input
                type="checkbox"
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
              <label htmlFor={item.name}>{item.name}</label>
            </div>
            <div>
              <p>{item.hours}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <input type="checkbox" title="Exibir unidades fechadas" />
        <p>
          Resultado encontrados: <span>{results}</span>
        </p>
      </div>
      <div>
        
      </div>
    </div>
  );
};
