import React, { useEffect, useState } from "react";
import Item from "./Item";
import styles from "./Itens.module.scss";

import cardapio from "./itens.json";

interface ItensProps {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens(props: ItensProps) {
  const [lista, setLista] = useState(cardapio);
  const { busca, filtro } = props;

  function testeBusca(title: string) {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  }

  function testeFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testeBusca(item.title) && testeFiltro(item.category.id)
    );
    setLista(novaLista);
  }, [busca, filtro]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
