import React from "react";
import filtros from "./filtros.json";
import classNames from "classnames";

import style from "./Filtros.module.scss";

type Iopcao = typeof filtros[0];
interface FiltroProps {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: FiltroProps) {
  function selecionarFiltro(opcao: Iopcao) {
    if (filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  }

  return (
    <div className={style.filtros}>
      {filtros.map((opcao) => (
        <button
          className={classNames({
            [style.filtros__filtro]: true,
            [style["filtros__filtro--ativo"]]:
              filtro === opcao.id ? true : false,
          })}
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
