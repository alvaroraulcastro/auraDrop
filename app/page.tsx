import { HelloAntd } from "@/components/ui/HelloAntd";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>auraDrop</h1>
        <p>Gotas para estrés, meditación y cuidado personal.</p>
        <HelloAntd />
      </main>
    </div>
  );
}
