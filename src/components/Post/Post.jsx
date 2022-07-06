// Components
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

// Styles
import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/GuilhermeFRocha.png" alt="perfil" />
          <div className={styles.authorInfo}>
            <strong>Guilherme Freitas</strong>
            <span>Web</span>
          </div>
        </div>

        <time title="11 de Maio às 13:13" dateTime="2022-05-11 08:12">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>sacascascascascascasccascascascascascacascasc</p>
        <p>ssssssssssssssssssssssssssssssssssssssssss</p>
        <p>
          <a href="#">ssssssssssss</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe deu feedback</strong>
        <textarea placeholder="Deixe um comentario" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
