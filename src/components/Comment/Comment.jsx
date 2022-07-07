// Components
import { Avatar } from "../Avatar/Avatar";

// Libs
import { ThumbsUp, Trash } from "phosphor-react";

// Styles
import styles from "./Comment.module.css";

export const Comment = ({ content }) => {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/GuilhermeFRocha.png"
        alt="perfil"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Freitas</strong>
              <time title="11 de Maio às 13:13" dateTime="2022-05-11 08:12">
                cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}; 