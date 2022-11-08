import React from "react";
import styles from "./Item.module.scss";

import logo from "assets/logo.svg";
import cardapio from "../itens.json";

import classnames from "classnames";

type ItemProps = typeof cardapio[0];

export default function Item(props: ItemProps) {
  return (
    <div className={styles.item}>
      <img className={styles.item__imagem} src={props.photo} alt={props.title} />
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classnames({
              [styles.item__tipo]: true,
              [styles[`item__tipo__${props.category.label.toLowerCase()}`]]:
                true,
            })}
          >
            {props.category.label}
          </div>
          <div className={styles.item__porcao}>{props.size}g</div>
          <div className={styles.item__qtdpessoas}>
            Serve {props.serving} pessoa{props.serving === 1 ? "" : "s"}
          </div>
          <div className={styles.item__valor}>R$ {props.price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
