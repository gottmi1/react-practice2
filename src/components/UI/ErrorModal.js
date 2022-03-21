import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import React from "react";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          content={props.content}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );

  // portal의 핵심은 렌더링 된 html코드를 다른 곳으로 옮기는 일을 한다(이 경우 root의 바깥으로), public/index.html도 수정해줘야 한다.
  // document... 은 react에서 거의 사용하지 않지만 portal을 쓸 때는 쓸 수밖에 없다고 함
  // portal을 이용하여 root안 뿐이 아니라 root밖에 새로운 root를 놓을수가 있다.
  // React-dom 으로 createPortal메서드를 사용할 수 있다. 2개의 인수를 받는데
  // 1. 렌더링 되어야 하는 리액트 노드
  // 2. 포인터 오소들이 렌더링되어야 하는 실제 DOM안의 컨테이너를 가르킴
};

export default ErrorModal;
