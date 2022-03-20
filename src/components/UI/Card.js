import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
  // className={props.className(이건 내가 정하는 이름임)}으로 AddUser 컴포넌트의 <Card className(내가 정하는 이름)={styles.input}>에 적용된 className을 props를 사용해 Card 컴포넌트까지 적용할 수 있다.
  // Card로 다른 컴포넌트의 컨텐츠를 감싼 후 props.children을 해줘야 안에 있는 컨텐츠들을 렌더링할 수 있다
};

export default Card;
