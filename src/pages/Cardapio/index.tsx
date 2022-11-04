import styles from "./Cardapio.module.scss";
import { ReactComponent as LogoAluroni } from "assets/logo.svg";

export default function Cardapio() {
  return (
    <main>
      <nav className={styles.menu}>
        <LogoAluroni />
      </nav>
    </main>
  );
}
