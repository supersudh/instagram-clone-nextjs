import styles from './Story.module.css';

export default function Story({ img, username }) {
  return (
    <div>
      <img
        src={img}
        alt={username}
        className={styles.storyImage}
      />
      <p className={styles.username}>{username}</p>
    </div>
  );
}
