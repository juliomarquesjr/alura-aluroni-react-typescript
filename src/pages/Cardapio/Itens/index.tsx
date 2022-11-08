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
  const { busca, filtro, ordenador } = props;

  function testeBusca(title: string) {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  }

  function testeFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: typeof cardapio) {
    switch (ordenador) {
      case "porcao":
        return novaLista.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "porcao":
        return novaLista.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "preco":
        return novaLista.sort((a, b) => (a.price > b.price ? 1 : -1));

      default:
        return novaLista;
    }
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testeBusca(item.title) && testeFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
