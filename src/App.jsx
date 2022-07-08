// Components
import { Post } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

// Styles
import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      name: "Julio Alcantara",
      avatar: "https://github.com/GuilhermeFRocha.png",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifolio",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2020-01-01 10:00:00"),
  },
  {
    id: 2,
    author: {
      name: "Guilherme",
      avatar: "https://github.com/guilherme.png",
      role: "Dev",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifolio",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2020-02-08 20:00:00"),
  },
];

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post allPosts={posts}/>
        </main>
      </div>
    </div>
  );
};