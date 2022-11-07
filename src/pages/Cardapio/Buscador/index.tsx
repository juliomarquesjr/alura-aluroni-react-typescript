import React from "react";
import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg"

interface BuscadorProps {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({ busca, setBusca }: BuscadorProps) {
  return (
    <div className={styles.buscador}>
      <input
        type="text"
        value={busca}
        placeholder="Buscar...."
        onChange={(event) => {
          setBusca(event.target.value);
        }}
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
