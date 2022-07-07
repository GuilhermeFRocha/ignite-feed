// Components
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

// Styles
import styles from "./Post.module.css";

// Libs
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const Post = ({ allPosts }) => {
  return allPosts.map((post) => {
    const publishedDateFormatted = format(
      post.publishedAt,
      "d 'de' LLLL 'ás' HH:mm'h'",
      {
        locale: ptBR,
      }
    );

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
      locale: ptBR,
      addSuffix: true,
    });

    return (
      <article className={styles.post} key={post.id}>
        <header>
          <div className={styles.author}>
            <Avatar src={post.author.avatar} alt="perfil" />
            <div className={styles.authorInfo}>
              <strong>{post.author.name}</strong>
              <span>{post.author.role}</span>
            </div>
          </div>

          <time
            title={publishedDateFormatted}
            dateTime={post.publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {post.content.map((item) => {
            if (item.type === "paragraph") {
              return <p key={item.content}>{item.content}</p>;
            } else if (item.type === "link") {
              return (
                <p>
                  <a key={item.content} href="#">
                    {item.content}
                  </a>
                </p>
              );
            }
          })}
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
  });
};