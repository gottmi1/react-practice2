import styles from "./ErrorModal.module.css";

import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onConfirm}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>닫기</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;