// Components
import { Post } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

// Styles
import styles from "./App.module.css";
import "./global.css";

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post infos={"testes"} />
        </main>
      </div>
    </div>
  );
};
