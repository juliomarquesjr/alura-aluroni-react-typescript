import React from "react";
import styles from "./Item.module.scss";

import logo from "assets/logo.svg";

export default function Item() {
  return (
    <div className={styles.item}>
      <img className={styles.item__imagem} src={logo} alt="Imagem do Item" />
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>Macarrão</h2>
          <p>Descrição do Macarrão</p>
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__tipo}>Massa</div>
          <div className={styles.item__porcao}>400g</div>
          <div className={styles.item__qtdpessoas}>Server 2 pessoas</div>
          <div className={styles.item__valor}>R$50</div>
        </div>
      </div>
    </div>
  );
}
